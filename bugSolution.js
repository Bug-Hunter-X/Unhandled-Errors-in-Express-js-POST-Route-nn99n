const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    const user = req.body;
    // Validate user data
    if (!user || !user.name || !user.email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    console.log('Received user:', user);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));