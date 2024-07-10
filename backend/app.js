const express = require('express');
const app = express();

const authRouter = require('./router/authRoute.js');
const databaseconnect = require('./config/databaseConfig.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(cors({ origin: ["https://user-management-system-awa2.onrender.com", "http://localhost:3000", "https://www.jwt-auth-api.raish.tech"], credentials: true })); //Third-party middleware

// connect to db 
databaseconnect();

app.use(express.json()); // Built-in middleware//? parsing data in json format
app.use(cookieParser()); // Third-party middleware


 
// Auth router
app.use('/api/auth', authRouter);

app.use('/', (req, res) => {
  res.status(200).json({ data: 'JWTauth server ;)' });
});


module.exports = app;
