require('dotenv').config({ path: '../.env'});
const app = require('./app');
const connectDB = require('./config/db');

// initialize the db connection
connectDB();

// start the server
try {
  app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
  });
}
catch (error) {
  console.error('Failed to start server:', error);
}