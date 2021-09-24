const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path')
const colors = require('colors');
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const transactions = require('./routes/transactions')
const PORT = process.env.PORT || 5000

dotenv.config({ path: "./config/config.env" });

connectDB();

app.use(express.json()); // parses incoming requests with JSON payloads
app.use(morgan("dev")) 
app.use('/api/v1/transactions', transactions);
app.use(express.static("client/build")); //serves static files/
app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));


app.listen(PORT, console.log(`server is running on ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold))