# taken from http://www.piware.de/2011/01/creating-an-https-server-in-python/
# generate server.xml with the following command:
#    openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes
# run as follows:
#    python simple-https-server.py
# then in your browser, visit:
#    https://localhost:4443

import BaseHTTPServer, SimpleHTTPServer
import ssl
from BaseHTTPServer import HTTPServer, BaseHTTPRequestHandler
from SocketServer import ThreadingMixIn
import threading
import argparse

host = "localhost"
port = 44430

parser = argparse.ArgumentParser(description="Serve Threaded HTTP w/ TLS")
parser.add_argument("--host",default="localhost",help="hostname")
parser.add_argument("--port",type=int,default=44430,help="port")
parser.add_argument("--key",default="./server.key",help="keyfile")
parser.add_argument("--crt",default="./server.crt",help="cert crt file")
args = parser.parse_args()


# https://pymotw.com/2/BaseHTTPServer/index.html#module-BaseHTTPServer

class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    """Handle requests in a separate thread."""

httpd = ThreadedHTTPServer((args.host, args.port), SimpleHTTPServer.SimpleHTTPRequestHandler)
print("https://%s:%s/" % (args.host,args.port))
httpd.socket = ssl.wrap_socket (httpd.socket, keyfile=args.key, certfile=args.crt, server_side=True)
httpd.serve_forever()
