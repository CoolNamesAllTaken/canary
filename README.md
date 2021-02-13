# Canary
Canary is an open source project for distributed monitoring of local bird populations.

## Build Log
* Node webserver [installation guide](https://www.instructables.com/How-to-Make-a-Web-Server-With-a-Raspberry-Pi/)
* [Express camera streaming tutorial](https://www.youtube.com/watch?v=qexy4Ph66JE)
* [Make Socket IO work with Express 4](https://stackoverflow.com/questions/24609991/using-socket-io-in-express-4-and-express-generators-bin-www) 

## SFTP Troubleshooting
### Can't sync using SFTP for VSCode
Make sure that you have run the SFTP: download project command, and that your remote path is correct!

### Can download OK, but permission denied when uploading.
This happens when using SFTP as user pi, which may not have the correct permissions to modify the folder being uploaded to via SFTP.
```
sudo chmod 775 canary
sudo chown -R pi:pi canary/
```
