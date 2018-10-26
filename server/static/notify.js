// Make connection
var socket = io('').connect('http://localhost')

// Query DOM
var btn = document.getElementById('send'),
    output = document.getElementById('output'),
    msg = document.getElementById('message'),
    clientid = null

// Register socket id for client
socket.on('register', function (id) {
    clientid = id;
});

// Call api
btn.addEventListener('click', function () {
    var request = new XMLHttpRequest()
    request.open('GET', '/echo?body=' + msg.value + '&id=' + clientid)
    request.send()
});

// Listen for events
socket.on('notify', function (data) {
    output.innerHTML += '<p>' + data + '</p>'
});
