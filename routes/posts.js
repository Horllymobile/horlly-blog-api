"use strict";

const express = require('express');
const postController = require('../controllers/posts');
const routes = express.Router();

routes.get('/posts',postController.getPosts);
routes.get('/posts/:id',postController.getPost);

routes.post('/posts',postController.createPost);


module.exports = routes;