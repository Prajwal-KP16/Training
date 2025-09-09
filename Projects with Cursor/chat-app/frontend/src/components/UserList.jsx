const UserList = ({ users, currentUser }) => {
  return (
    <div className="p-4">
      <h3 className="font-semibold text-gray-800 mb-4">Online Users</h3>
      <div className="space-y-2">
        {users.map((user) => (
          <div
            key={user.id}
            className={`flex items-center gap-3 p-2 rounded-md ${
              user.id === currentUser.id ? 'bg-blue-100' : 'hover:bg-gray-100'
            }`}
          >
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-8 h-8 rounded-full"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium truncate ${
                user.id === currentUser.id ? 'text-blue-800' : 'text-gray-800'
              }`}>
                {user.username}
                {user.id === currentUser.id && ' (You)'}
              </p>
              <p className="text-xs text-gray-500">
                Joined {new Date(user.joinedAt).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
