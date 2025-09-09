import { useState, useEffect, useRef } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserList from './UserList';
import TypingIndicator from './TypingIndicator';

const ChatRoom = ({ user, socket, onLogout }) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Listen for initial data
    socket.on('initialData', (data) => {
      setUsers(data.users);
      setMessages(data.messages);
    });

    // Listen for new messages
    socket.on('newMessage', (message) => {
      setMessages(prev => [...prev, message]);
    });

    // Listen for user joining
    socket.on('userJoined', (data) => {
      setUsers(prev => [...prev, data.user]);
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: data.message,
        type: 'system',
        timestamp: new Date()
      }]);
    });

    // Listen for user leaving
    socket.on('userLeft', (data) => {
      setUsers(prev => prev.filter(u => u.id !== data.user.id));
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: data.message,
        type: 'system',
        timestamp: new Date()
      }]);
    });

    // Listen for typing indicators
    socket.on('userTyping', (data) => {
      if (data.isTyping) {
        setTypingUsers(prev => {
          if (!prev.find(u => u.id === data.user.id)) {
            return [...prev, data.user];
          }
          return prev;
        });
      } else {
        setTypingUsers(prev => prev.filter(u => u.id !== data.user.id));
      }
    });

    return () => {
      socket.off('initialData');
      socket.off('newMessage');
      socket.off('userJoined');
      socket.off('userLeft');
      socket.off('userTyping');
    };
  }, [socket]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={user.avatar} 
              alt={user.username}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">Welcome, {user.username}!</h2>
              <p className="text-sm text-blue-100">{users.length} users online</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="bg-white text-black bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="flex h-96">
          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <MessageList messages={messages} currentUser={user} />
              <TypingIndicator typingUsers={typingUsers} currentUser={user} />
              <div ref={messagesEndRef} />
            </div>
            
            {/* Message Input */}
            <MessageInput socket={socket} currentUser={user} />
          </div>

          {/* User List */}
          <div className="w-64 border-l border-gray-200 bg-gray-50">
            <UserList users={users} currentUser={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
