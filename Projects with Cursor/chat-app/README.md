# Real-Time Chat Application

A modern, real-time chat application built with React, Socket.io, and Tailwind CSS. Features include live messaging, typing indicators, user presence, and a beautiful responsive UI.

## Features

- 🚀 **Real-time messaging** with Socket.io
- 👥 **User presence** - see who's online
- ⌨️ **Typing indicators** - know when someone is typing
- 🎨 **Modern UI** with Tailwind CSS
- 📱 **Responsive design** - works on all devices
- 🔄 **Auto-reconnection** - handles connection issues gracefully
- 💬 **System messages** - notifications for user joins/leaves

## Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Socket.io Client** - Real-time communication

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Socket.io** - Real-time bidirectional communication
- **CORS** - Cross-origin resource sharing
- **UUID** - Unique identifier generation

## Project Structure

```
chat-app/
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatRoom.jsx
│   │   │   ├── LoginForm.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── MessageList.jsx
│   │   │   ├── TypingIndicator.jsx
│   │   │   └── UserList.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── package.json
└── README.md
```

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd chat-app
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both the backend server (port 5000) and frontend dev server (port 3000) concurrently.

### Manual Setup

If you prefer to set up each part manually:

#### Backend Setup
```bash
cd backend
npm install
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Usage

1. **Start the application** using `npm run dev`
2. **Open your browser** and go to `http://localhost:3000`
3. **Enter a username** to join the chat
4. **Start chatting!** Open multiple browser tabs to test real-time features

## Features in Detail

### Real-time Messaging
- Messages are sent instantly to all connected users
- No page refresh needed
- Messages persist during the session

### Typing Indicators
- See when other users are typing
- Automatic timeout after 1 second of inactivity
- Multiple users typing support

### User Presence
- Live user list showing who's online
- User join/leave notifications
- Connection status indicator

### Modern UI
- Clean, modern design with Tailwind CSS
- Responsive layout that works on mobile and desktop
- Smooth animations and transitions
- Custom avatars with fallback generation

## API Endpoints

### Socket.io Events

#### Client to Server
- `join` - User joins the chat
- `sendMessage` - Send a new message
- `typing` - Typing indicator (true/false)

#### Server to Client
- `initialData` - Initial users and messages
- `newMessage` - New message received
- `userJoined` - User joined notification
- `userLeft` - User left notification
- `userTyping` - Typing indicator update

## Customization

### Styling
The app uses Tailwind CSS for styling. You can customize the appearance by modifying the Tailwind classes in the components.

### Backend Configuration
Modify `backend/server.js` to:
- Change the port (default: 5000)
- Add authentication
- Implement message persistence
- Add more features

### Frontend Configuration
Modify `frontend/vite.config.js` to:
- Change the frontend port
- Add plugins
- Configure build options

## Development

### Adding New Features
1. **Backend**: Add new Socket.io events in `server.js`
2. **Frontend**: Create new components in `src/components/`
3. **Styling**: Use Tailwind classes for consistent design

### File Structure Best Practices
- Keep components small and focused
- Use descriptive component names
- Separate concerns (UI, logic, styling)

## Troubleshooting

### Common Issues

1. **Port already in use**
   - Change ports in `package.json` scripts
   - Kill existing processes using the ports

2. **Socket connection failed**
   - Ensure backend server is running
   - Check CORS configuration
   - Verify port numbers match

3. **Styling not working**
   - Ensure Tailwind CSS is properly configured
   - Check `vite.config.js` for Tailwind plugin
   - Verify `index.css` imports Tailwind

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for learning or as a starting point for your own chat application!

## Next Steps

Consider adding these features:
- Message persistence with a database
- User authentication and authorization
- File/image sharing
- Private messaging
- Message reactions
- Chat rooms/channels
- Message search
- Push notifications
- Mobile app with React Native
