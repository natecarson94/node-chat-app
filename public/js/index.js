const socket = io();

   socket.on('connect',function(){
       console.log('connected to server');
      
    socket.on('newMessage',function(newMessage){
        console.log('newMessage',newMessage);
    });
    
   });

   socket.on('disconnect',function(){
    console.log('disconnected from the server');
   });
   
   
