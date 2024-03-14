const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

// Adjust the path for static files to go up one directory
app.use(express.static(path.join(__dirname, '../build')));

// Adjust the path for the catchall handler as well
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
