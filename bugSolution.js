const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err); // Log the error for debugging
      res.status(500).json({ error: 'Failed to fetch user' }); // Send a generic error response
    } else {
      res.json(user);
    }
  });
});

// ... other routes ...
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});