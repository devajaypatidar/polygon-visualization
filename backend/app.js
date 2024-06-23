require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const locationRoutes = require('./routes/locationRoutes')
const connectDB = require('./config/database');
const app = express();

app.use(bodyParser.json());

connectDB();

app.use('/api',locationRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is started on Port ${PORT}`);
})