var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1234');
var topic = 'LINTANGtest123';
const txtgen = require('txtgen');

// var message = 'Bismillahir Rahmanir Rahim';
const message = txtgen.sentence();

client.on('connect', () => {
    setInterval(() => {
        client.publish(topic, message)
        console.log('Message sent!', message)
    }, 5000);
})