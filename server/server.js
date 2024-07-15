const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const rooms = {};

io.on('connection', (socket) => {
  console.log('A user connected with ID:', socket.id);

  socket.on('join', (room) => {
    console.log(`User ${socket.id} is joining room: ${room}`);
    
    if (!rooms[room]) {
      rooms[room] = { mentor: socket.id, student: null };
      socket.join(room);
      socket.emit('role', 'mentor');
      console.log(`User ${socket.id} is set as mentor for room ${room}`);
    } else if (rooms[room].mentor === socket.id) {
      socket.join(room);
      socket.emit('role', 'mentor');
      console.log(`User ${socket.id} reconnected as mentor for room ${room}`);
    } else if (!rooms[room].student || rooms[room].student === socket.id) {
      rooms[room].student = socket.id;
      socket.join(room);
      socket.emit('role', 'student');
      console.log(`User ${socket.id} is set as student for room ${room}`);
    } else {
      socket.emit('error', 'Room is full');
      console.log(`Room ${room} is full. User ${socket.id} couldn't join.`);
    }

    console.log(`Current state of room ${room}:`, rooms[room]);
  });

  socket.on('codeChange', ({ room, code }) => {
    // console.log(`Received codeChange event. Room: ${room}, Code: ${code.substring(0, 20)}...`);
    socket.to(room).emit('codeChange', code);
  });

  socket.on('solutionFound', (room) => {
    io.to(room).emit('solutionFound');
  });

  socket.on('showToast', ({ room, ...toastData }) => {
    io.to(room).emit('showToast', toastData);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    for (let room in rooms) {
      if (rooms[room].mentor === socket.id) {
        console.log(`Mentor disconnected from room ${room}`);
        if (rooms[room].student) {
          rooms[room].mentor = rooms[room].student;
          rooms[room].student = null;
          io.to(rooms[room].mentor).emit('role', 'mentor');
          console.log(`Student ${rooms[room].mentor} promoted to mentor in room ${room}`);
        } else {
          delete rooms[room];
        }
      } else if (rooms[room].student === socket.id) {
        console.log(`Student disconnected from room ${room}`);
        rooms[room].student = null;
      }
    }
    console.log('Updated rooms:', rooms);
  });
});


// const PORT = process.env.PORT || 3001;
// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
