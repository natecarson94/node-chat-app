const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join('__dirname', '../public');
const port = process.env.PORT || 3000
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) =>{
    console.log('New user connected');

    socket.on('disconnect', ()=>{
        console.log('Client Disconnected');
    });

    socket.emit('newMessage',{
        from: 'me@example.com',
        text:'I just sent you a message',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage',(message)=>{
        console.log('createMessage',message);
    });


});



server.listen(port,()=>{
    console.log(`Server is up on ${port}`);
});

