const socket = io();

   socket.on('connect',function(){
       console.log('connected to server');
      
    socket.on('newMessage',function(newMessage){
        console.log('newMessage',newMessage);
    });

    socket.emit('createMessage',{
        from: 'otherme@example.com',
        text: 'I just sent everyone a message'
    });
    
   });

   socket.on('disconnect',function(){
    console.log('disconnected from the server');
   });
   
   
