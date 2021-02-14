var redis = require("redis");
var publisher = redis.createClient();
publisher.publish("temperature:inside", "{\"message\":\"Hello world from Asgardian!\"}", function(){
 process.exit(0);
});