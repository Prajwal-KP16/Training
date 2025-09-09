const TypingIndicator = ({ typingUsers, currentUser }) => {
  if (typingUsers.length === 0) return null;

  const typingText = typingUsers.length === 1 
    ? `${typingUsers[0].username} is typing...`
    : `${typingUsers.length} users are typing...`;

  return (
    <div className="flex justify-start">
      <div className="flex gap-2 max-w-xs lg:max-w-md">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
        <div className="bg-gray-100 text-gray-600 px-3 py-2 rounded-lg">
          <p className="text-sm italic">{typingText}</p>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
