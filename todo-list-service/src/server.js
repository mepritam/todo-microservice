require('dotenv').config(); // MUST be first

const app = require('./app');
const connectDB = require('./config/db');

// initialize the db connection
connectDB();

// start the server
app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT);
});
