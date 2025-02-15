const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // Sends the error to the client instead of handling it properly
      res.send(err); 
    } else {
      res.json(user);
    }
  });
});

// ... other routes ...
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});