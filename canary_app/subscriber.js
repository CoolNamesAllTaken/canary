var redis = require('redis')
var subscriber = redis.createClient("6379", "localhost");

subscriber.on("message", function(channel, message) {
  console.log("Message " + message + " on channel " + channel + " has arrived!");
});
subscriber.subscribe("temperature:inside");