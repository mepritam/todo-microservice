const express = require('express');
const routes = require('./routes/task.route');

const app = express();

app.use(express.json());
app.use('/api/v1/', routes);

app.get('/', (req, res) => {
  res.send('Todo List Service is running');
});

module.exports = app;