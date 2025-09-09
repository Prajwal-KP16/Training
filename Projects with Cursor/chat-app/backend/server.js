const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// Store active users and messages
const users = new Map();
const messages = [];

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Handle user joining
  socket.on('join', (userData) => {
    const user = {
      id: socket.id,
      username: userData.username,
      avatar: userData.avatar || `https://ui-avatars.com/api/?name=${userData.username}&background=random`,
      joinedAt: new Date()
    };
    
    users.set(socket.id, user);
    
    // Notify all users about new user joining
    socket.broadcast.emit('userJoined', {
      user: user,
      message: `${user.username} joined the chat`
    });
    
    // Send current users and recent messages to the new user
    socket.emit('initialData', {
      users: Array.from(users.values()),
      messages: messages.slice(-50) // Last 50 messages
    });
    
    console.log(`${user.username} joined the chat`);
  });

  // Handle new message
  socket.on('sendMessage', (messageData) => {
    const user = users.get(socket.id);
    if (user) {
      const message = {
        id: uuidv4(),
        text: messageData.text,
        user: {
          id: user.id,
          username: user.username,
          avatar: user.avatar
        },
        timestamp: new Date(),
        type: 'message'
      };
      
      messages.push(message);
      
      // Broadcast message to all users
      io.emit('newMessage', message);
    }
  });

  // Handle typing indicator
  socket.on('typing', (isTyping) => {
    const user = users.get(socket.id);
    if (user) {
      socket.broadcast.emit('userTyping', {
        user: user,
        isTyping: isTyping
      });
    }
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    const user = users.get(socket.id);
    if (user) {
      users.delete(socket.id);
      
      // Notify all users about user leaving
      socket.broadcast.emit('userLeft', {
        user: user,
        message: `${user.username} left the chat`
      });
      
      console.log(`${user.username} left the chat`);
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
