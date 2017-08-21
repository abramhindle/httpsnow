all: localhostCA.crt server.crt

localhostCA.key:
	openssl genrsa -out localhostCA.key 2048

localhostCA.pem: localhostCA.key # generate-ca.sh
	openssl req -x509 -new -nodes -key localhostCA.key \
		-subj "/C=CA/ST=AB/L=EDMONTON/O=httpsnow/CN=localhost" \
		-sha256 -days 3650 -out localhostCA.pem

localhostCA.crt: localhostCA.key
	openssl req -new -x509 -days 3650 -key localhostCA.key \
		-subj "/C=CA/ST=AB/L=EDMONTON/O=httpsnow/CN=localhost" \
		-out localhostCA.crt

server.key:
	openssl genrsa -out server.key 2048

server.csr: server.key localhostCA.pem
	openssl req -new -key server.key -out server.csr -subj "/C=CA/ST=AB/L=EDMONTON/O=httpsnow/CN=localhost" 

server.crt: server.csr localhostCA.pem
	openssl x509 -req -in server.csr -CA localhostCA.pem -CAkey localhostCA.key -CAcreateserial -out server.crt -days 3650 -sha256 -extfile v3.ext

serve:
	openssl s_server -accept 44330 -cert server.crt -key server.key -WWW

clean:
	rm localhostCA.key  localhostCA.srl  server.csr localhostCA.crt  localhostCA.pem  server.crt  server.key
