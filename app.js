const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Health check
app.get('/', (req, res) => {
  res.send('Node.js App is Running 🚀');
});

// Simulated contact form endpoint
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // In a real app, you'd save to a DB or send an email here
  console.log('Form submission received:', { name, email, message });
  res.status(200).json({ success: true, message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

