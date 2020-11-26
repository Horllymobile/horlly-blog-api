"use strict";

const express = require('express');
const postController = require('../controllers/posts');
const routes = express.Router();

routes.get('/posts',postController.getPosts);



module.exports = routes;