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

socket.emit('newMessage',{
    from: 'admin',
    text: 'Welcome to the chat app!'
});

socket.broadcast.emit('newMessage',{
    from:'Admin',
    text: 'New User Joined'
});

    socket.on('disconnect', ()=>{
        console.log('Client Disconnected');
    });


    socket.on('createMessage',(message)=>{
        console.log('createMessage',message);
        io.emit('newMessage',{
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage',{
        //     from: message.from,
        //     text: message.text,
        //     createAt: new Date().getTime()
        // });
    });


});



server.listen(port,()=>{
    console.log(`Server is up on ${port}`);
});

