var mosca = require('mosca')
var settings = { 
    port : 1234
};
var broker = new mosca.Server(settings);

broker.on('ready', () => {
    console.log('broker is ready!');
});

broker.on('published', (packet) => {
    message = packet.payload.toString();
    console.log(message);
})