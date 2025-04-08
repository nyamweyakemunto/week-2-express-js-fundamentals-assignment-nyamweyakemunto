let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  
  // Get all users
  const getUsers = (req, res) => {
    res.json(users);
  };
  
  // Get single user
  const getUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    res.json(user);
  };
  
  // Create user
  const createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
      const error = new Error('Name and email are required');
      error.statusCode = 400;
      throw error;
    }
    
    const newUser = {
      id: users.length + 1,
      name,
      email
    };
    
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  // Update user
  const updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    
    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    
    res.json(user);
  };
  
  // Delete user
  const deleteUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
  };
  
  module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
  };