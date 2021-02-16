# Setup Instructions
## GPIO Setup

1. Enable the camera and onewire interface using `sudo raspi-config`.

2. Enable multiple onewire busses on GPIO 3 and 4 by adding the following to the end of `/boot/config.txt`.

```bash
dtoverlay=w1-gpio,gpiopin=4
dtoverlay=w1-gpio,gpiopin=17
```

## Systemd Setup

Get everything to run automatically on startup using systemd! These instructions will create two new services: canary-web, which runs the webserver, and canary-python, which runds the backend data acquisition and processing.

Copy the systemd files into the right directory.

```bash
sudo cp canary-web.service /lib/systemd/system/canary-web.service
sudo cp canary-python.service /lib/systemd/system/canary-python.service
```

Reload systemd files to bring in the new stuff.

```bash
sudo systemctl daemon-reload
```

Enable the new services!

```bash
sudo systemctl enable canary-web
sodu systemctl enable canary-python
```
