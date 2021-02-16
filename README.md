# Canary

Canary is an open source project for distributed monitoring of local bird populations.

## Build Notes

### NodeJS + Express

* Node webserver [installation guide](https://www.instructables.com/How-to-Make-a-Web-Server-With-a-Raspberry-Pi/)
* [Express camera streaming tutorial](https://www.youtube.com/watch?v=qexy4Ph66JE)
* [Make Socket IO work with Express 4](https://stackoverflow.com/questions/24609991/using-socket-io-in-express-4-and-express-generators-bin-www)

### REDIS

* [Install REDIS](https://thisdavej.com/guides/redis-node/installation.html)
* [Hello REDIS example](https://opensource.com/article/18/4/how-build-hello-redis-with-python)

### OpenCV

* [Put OpenCV images into REDIS](https://gist.github.com/gachiemchiep/52f3255a81c907461c2c7ced6ede367a)

### Hardware

* Onewire
  * [Onewire Pinout](https://pinout.xyz/pinout/1_wire)
  * [Configure multiple onewire busses](https://blog.oddbit.com/post/2018-03-27-multiple-1-wire-buses-on-the-/)
* Camera
  * [Getting IR camera to work](https://www.raspberrypi.org/forums/viewtopic.php?t=215713)

### Automatic Startup

* [Running node app with systemd](https://nodesource.com/blog/running-your-node-js-app-with-systemd-part-1)
  * This leaves out important info: see Troubleshooting section for running on port 80 (or any port under 1024)!

## Troubleshooting

### SFTP Issues

Problem: Can't sync using SFTP for VSCode

Solution: Make sure that you have run the SFTP: download project command, and that your remote path is correct!

Problem: Can download OK, but permission denied when uploading.

Solution: This happens when using SFTP as user pi, which may not have the correct permissions to modify the folder being uploaded to via SFTP.

```bash
sudo chmod 775 canary
sudo chown -R pi:pi canary/
```

### OpenCV Issues

Problem: Get an error when attempting to import cv2 that says it can't access the libcblas shared object file.

Solution: This resolves the import error (can't access libcblas shared object file) when running cv2 in pipenv: `sudo apt-get install libatlas-base-dev`. Answer from [here](https://stackoverflow.com/a/56972113).

### Systemd Issues

Problem: Can't run the node app on port 80, but works on other ports.

Solution: Ports [below 1024](https://stackoverflow.com/questions/18947356/node-js-app-cant-run-on-port-80-even-though-theres-no-other-process-blocking-t) require root privileges. Make sure the [systemd service is running as root](https://serverfault.com/questions/806617/configuring-systemd-service-to-run-with-root-access), or that you are running `sudo npm start` if you want to run on port 80.
