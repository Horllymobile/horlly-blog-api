"use strict";
const express = require('express');
require('dotenv').config({path: './configs/'});

// Routes Import 
const postRoutes = require('./routes/posts');


const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my Blog API"S');
})

app.use('/api', postRoutes);

const PORT = process.env.PORT || 3000;


app.listen(PORT,  console.log(`Server running on PORT ${PORT}`));

