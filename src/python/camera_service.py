import redis
import cv2
import base64
import io
from picamera import PiCamera

camera = PiCamera()

def init_camera(r):
    # set REDIS channels to their default value
    r.set("camera:inside", "")

    # configure camera
    camera.resolution = (640, 480)
    camera.framerate = 32

def capture_frame(r):
    encoded_string = ""
    stream = io.BytesIO()
    camera.capture(stream, 'jpeg', use_video_port=True)
    stream.seek(0)
    encoded_string = base64.b64encode(stream.read())
    r.publish("camera:inside", encoded_string)
    # print(r.get("camera:inside"))

if __name__=='__main__':
    capture_frame()