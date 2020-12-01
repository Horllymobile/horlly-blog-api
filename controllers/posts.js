const Article = require('../models/Article');

const getPosts = (req, res) => {
    try {
        const posts = await Article.find();
        return res.json(posts);
    } catch (error) {
        return res.send(error.message);
    }
};

const createPost = (req, res) => {
    res.send('Posts');
};


module.exports = {
    getPosts,
    createPost
}