import threading
import time
import redis

import sensor_service
import camera_service

REDIS_HOST = "localhost"
REDIS_PORT = 6379
REDIS_PASSWORD = ""

IMAGE_PATH = "image"

def run_sensor_service():
    while True:
        sensor_service.read_sensors(r)
        time.sleep(0.1)

def run_camera_service():
    while True:
        camera_service.capture_frame(r)
        time.sleep(0.01)

def main():
    global r

    # Start the REDIS instance
    r = redis.StrictRedis(host=REDIS_HOST, port=REDIS_PORT, password=REDIS_PASSWORD, decode_responses=True)

    sensor_service_thread = threading.Thread(target=run_sensor_service, daemon=False)
    sensor_service_thread.start()

    camera_service_thread = threading.Thread(target=run_camera_service, daemon=False)
    camera_service_thread.start()

if __name__ == '__main__':
    main()