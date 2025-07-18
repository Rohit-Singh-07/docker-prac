const express = require('express');
const router = express.Router();

// Sample user list
const users = [
  { id: 1, name: 'Rohit' },
  { id: 2, name: 'CodingStudent' }
];

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name || 'Unnamed User'
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
