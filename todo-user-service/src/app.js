const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('', require('./routes/user.routes'));
app.use(require('./middlewares/error.middleware'));

app.get('/', (req, res) => {
  res.send('Todo User Service is running');
});

module.exports = app;