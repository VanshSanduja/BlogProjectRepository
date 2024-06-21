const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/route.js');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const url = 'mongodb+srv://vanshsanduja2:XjQPNGYvzQvPQ3T8@bloggerproject.b9udzsi.mongodb.net/';
const port = process.env.PORT || 5000;

mongoose.connect(url)
    .then(() => console.log("Database is Connected"))
    
    .catch((err) => console.log(err))

app.use('/', route);

app.listen(port, ()=> console.log(`Server is Running Successfully ${port} `));