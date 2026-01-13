require('dotenv').config();
const connectDB = require('./src/config/db');
const app = require('./app');

//Initializing Database Connection
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Todo User Service is running on port ${process.env.PORT}`);
});