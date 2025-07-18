const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('👋 Hello from Dockerized Express App with routes!');
});

const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
