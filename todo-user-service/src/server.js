require('dotenv').config();
const connectDB = require('./config/db');
const app = require('./app');

// Initializing Database Connection
connectDB();

try {
  app.listen(process.env.PORT, () => {
    console.log(`Todo User Service is running on port ${process.env.PORT}`);
  });
} catch (error) {
  console.error('Error starting the server:', error);
}
