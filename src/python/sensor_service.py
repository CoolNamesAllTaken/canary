from w1thermsensor import W1ThermSensor

TEMP_SENSOR_ID_INSIDE = "01204c2f0e83"
TEMP_SENSOR_ID_OUTSIDE = "01204bf7ac34"

def init_sensors(r):
	# set REDIS channels to default values
	r.set("temperature:inside", 0)
	r.set("temperature:outside", 0)

def read_sensors(r):
	"""
	Reads sensors and writes data to the redis server.
	"""
	for sensor in W1ThermSensor.get_available_sensors():
		print("Sensor {} has temperature {}".format(sensor.id, sensor.get_temperature()))
		if sensor.id == TEMP_SENSOR_ID_INSIDE:
			print("\tLogging interior temperature to REDIS.")
			r.publish("temperature:inside", sensor.get_temperature())
			print(r.get("temperature:inside"))
		elif sensor.id == TEMP_SENSOR_ID_OUTSIDE:
			print("\tLogging exterior temperature to REDIS.")
			r.publish("temperature:outside", sensor.get_temperature())
			print(r.get("temperature:outside"))


