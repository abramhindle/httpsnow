openssl genrsa -out localhostCA.key 2048
openssl req -x509 -new -nodes -key localhostCA.key \
  -subj "/C=CA/ST=AB/L=EDMONTON/O=httpsnow/CN=localhost" \
	-sha256 -days 3650 -out localhostCA.pem
