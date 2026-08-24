const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mock Credentials
const MOCK_EMAIL = 'user@example.com';
const MOCK_PASSWORD = 'user@123';

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
    return res.status(200).json({ success: true, message: 'Login successful' });
  }

  return res.status(401).json({ success: false, message: 'Invalid email or password.' });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));