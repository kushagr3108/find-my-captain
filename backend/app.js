const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connectToDb = require('./db/db');

dotenv.config();
connectToDb();

app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;