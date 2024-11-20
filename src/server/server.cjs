const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors package

// Initialize the Express app
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Enable CORS for all routes (or you can customize it)
app.use(cors());

// In-memory "database" for users
const users = [
  { username: 'admin', password: '123',role:'admin' }
];

// POST route to register a new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'Username already exists' });
  }

  // Store the new user
  users.push({ username, password ,role:"client"});

  // Return success response
  return res.json({ success: true, message: 'User registered successfully' });
});

// POST route to login a user
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = users.find(user => user.username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  // Return success if credentials match
  if(username=='admin')
  {return res.json({ success: true ,role:'admin',token:'abde234'});}
  else
  {return res.json({ success: true ,role:'client',token:'wxyz123'});}
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
