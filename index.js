const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// GET endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/getdata', (req, res) => {
    res.send('Hello World! Get Data');
  });

// POST endpoint
app.post('/data', (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});