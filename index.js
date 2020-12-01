"use strict";
const express = require('express');
require('dotenv').config();

const db = require('./database/mongodb');

db();

// Routes Import 
const postRoutes = require('./routes/posts');


const app = express();

// Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(require('cors')({allowedHeaders:true,methods:'POST, GET, PUT'}));
app.use(require('helmet')({xssFilter: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to my Blog API"S');
})
app.use('/api', postRoutes);

const PORT = process.env.PORT || 3000;


app.listen(PORT,  console.log(`Server running on PORT ${PORT}`));

