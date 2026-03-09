const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', socket => {
  socket.on('message', msg => {
    for (const client of server.clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg.toString());
      }
    }
  });
});

console.log("Chat server running on ws://localhost:3000");