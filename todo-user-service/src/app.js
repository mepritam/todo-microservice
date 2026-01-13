const express = require('express');
const app = express();

// Middleware
app.use(express.json());

app.use('/users', require('./routes/user.routes'));
app.use(require('./middlewares/error.middleware'));

app.get('/', (req, res) => {
  res.send('Todo User Service is running');
});

module.exports = app;