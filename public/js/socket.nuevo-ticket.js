//Comando para establecer la comunicacion

var label = $('#lblNuevoTicket');
var socket = io();

socket.on('connect', function() {
    console.log("Conectado al servidor");
});


socket.on('disconnect', function() {
    console.log("Desconectado al servidor");

});

socket.on('estadoActual', function(data) {
    label.text(data.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });

});