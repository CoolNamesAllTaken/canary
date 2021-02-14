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

## Dependencies

This resolves the import error (can't access libcblas shared object file) when running cv2 in pipenv: `sudo apt-get install libatlas-base-dev`. Answer from [here](https://stackoverflow.com/a/56972113).

## Troubleshooting

### SFTP

#### Can't sync using SFTP for VSCode

Make sure that you have run the SFTP: download project command, and that your remote path is correct!

#### Can download OK, but permission denied when uploading.

This happens when using SFTP as user pi, which may not have the correct permissions to modify the folder being uploaded to via SFTP.

```bash
sudo chmod 775 canary
sudo chown -R pi:pi canary/
```
