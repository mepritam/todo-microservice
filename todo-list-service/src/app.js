const express = require('express');
const cors = require('cors');
const routes = require('./routes/task.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use('', routes);

app.get('/', (req, res) => {
  res.send('Todo List Service is running');
});

module.exports = app;