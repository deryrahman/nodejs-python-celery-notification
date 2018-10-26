var express = require('express')
var socket = require('socket.io')
var celery = require('node-celery')

// Server listen on port 80
var app = express()
server = app.listen(80, function () {
    console.log('app listening!')
})

// Static files
app.use(express.static('static'));

// If user connect to this server emit the socket id to client
var io = socket(server)
io.on('connection', function(socket){
    console.log('a user connected', socket.id)
    socket.emit('register', socket.id)
})

// Configuration for node-celery
client_celery = celery.createClient({
    CELERY_BROKER_URL: process.env.CELERY_BROKER_URL || 'amqp://',
    CELERY_RESULT_BACKEND: process.env.CELERY_RESULT_BACKEND || 'amqp://'
});

// Listening for event
app.get('/echo', function (req, res) {
    msg = req.query['body']
    id = req.query['id']
    var result = client_celery.call('tasks.echo', [msg]);
    res.send(result.taskid)
    
    // Send notify to spesific id
    var client = io.sockets.connected[id];
    result.on('ready', function (data) {
        console.log(data)
        client.emit('notify', data.result)
    });
})