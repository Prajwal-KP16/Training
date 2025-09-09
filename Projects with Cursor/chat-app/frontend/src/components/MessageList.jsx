const MessageList = ({ messages, currentUser }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="space-y-3">
      {messages.map((message) => {
        if (message.type === 'system') {
          return (
            <div key={message.id} className="text-center">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                {message.text}
              </span>
            </div>
          );
        }

        const isOwnMessage = message.user.id === currentUser.id;
        
        return (
          <div
            key={message.id}
            className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-2 max-w-xs lg:max-w-md ${isOwnMessage ? 'flex-row-reverse' : 'flex-row'}`}>
              {!isOwnMessage && (
                <img
                  src={message.user.avatar}
                  alt={message.user.username}
                  className="w-8 h-8 rounded-full flex-shrink-0"
                />
              )}
              
              <div className={`flex flex-col ${isOwnMessage ? 'items-end' : 'items-start'}`}>
                {!isOwnMessage && (
                  <span className="text-xs text-gray-500 mb-1">
                    {message.user.username}
                  </span>
                )}
                
                <div
                  className={`px-3 py-2 rounded-lg ${
                    isOwnMessage
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                
                <span className="text-xs text-gray-400 mt-1">
                  {formatTime(message.timestamp)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
