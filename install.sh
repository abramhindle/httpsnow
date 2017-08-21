sudo mkdir -p /usr/local/share/ca-certificates/httpsnow
sudo cp localhostCA.crt server.crt /usr/local/share/ca-certificates/httpsnow
sudo chmod 644 /usr/local/share/ca-certificates/httpsnow/*crt
sudo chmod 755 /usr/local/share/ca-certificates/httpsnow
cd  /usr/local/share/ca-certificates/
sudo update-ca-certificates

