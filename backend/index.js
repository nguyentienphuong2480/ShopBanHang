const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// API route example
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Serve static files for React frontend (sau này sẽ build frontend)
app.use(express.static(path.join(__dirname, 'public')));

// React fallback (cho phép React tiếp quản tất cả các route còn lại)
app.get('.*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
