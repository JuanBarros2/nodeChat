let app = require('./config/server.js');

let server = app.listen(process.env.PORT || 8080, function(){
    console.log('Servidor online');
});

let io = require('socket.io').listen(server);
app.set('io', io);
io.on('connection', (socket) => {
    console.log('Usuário conectou');
    socket.on('disconnect', (socket) => {
        console.log('Usuário desconectou');
    });

    socket.on('msgEnviada', (data) => {
        socket.emit('enter', {
            apelido: data.apelido,
            mensagem: data.mensagem
                });

        socket.broadcast.emit('enter', {
            apelido: data.apelido,
            mensagem: data.mensagem
                });
    });
});


