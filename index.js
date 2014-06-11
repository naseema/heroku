var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var i = 0;
var s = 'start...';

app.get('/', function(req, res){
  res.sendfile('index.html');
});


io.on('connection', function(socket){
	    io.emit('chat message', s);

  socket.on('chat message', function(msg){
  	s += "\n<br>" + msg;
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
	