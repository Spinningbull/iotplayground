// Using mqtt to trigger and respond to aws shadow device events
var mqtt = require('mqtt');
var fs = require('fs');
var deviceTopic = "$aws/things/ardTest/shadow/update";

var client = mqtt.connect('mqtts://A29TWRV0HPHLWG.iot.us-east-1.amazonaws.com', {
	port: '8883',
	cert: fs.readFileSync('/Users/toddhay/Development/iot/aws-iot-playground/cert.pem'),
	key: fs.readFileSync('/Users/toddhay/Development/iot/aws-iot-playground/privateKey.pem')
	}
);

//console.log (client);

client.on('connect', function(){
	console.log("Connected");
	client.subscribe(deviceTopic+'/accepted');
	client.subscribe(deviceTopic+'/rejected');
	var data = {
		state: {
			reported: {
				data: 'blue',
				on: false
			}
		}
	};
	console.log(JSON.stringify(data));
	client.publish(deviceTopic, JSON.stringify(data));
});

client.on('message', function(topic, msg) {
	console.log(topic);
	console.log(msg.toString());
});

client.on('error', function(err) {
	console.log('Error: '+err);
})