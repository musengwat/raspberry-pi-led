const express = require('express');
const ledRoutes = require('./routes/ledRoutes');
const { cleanup } = require('./controllers/ledController');

const app = express();
const port = 3000;

app.use(express.json());

// Use LED routes
app.use('/led', ledRoutes);

// Cleanup on exit
process.on('SIGINT', () => {
  cleanup();
  process.exit();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
