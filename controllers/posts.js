const Article = require('../models/Article');

const getPosts = async (req, res) => {
    try {
        const posts = await Article.find();
        return res.json(posts);
    } catch (error) {
        return res.send(error.message);
    }
};

const getPost = async (req, res) => {
    try {
        const posts = await Article.findById(req.params.id);
        return res.json(posts);
    } catch (error) {
        return res.send(error.message);
    }
};

const createPost = async (req, res) => {
    const post = new Article(req.body);

    post.save().then(data => {
        return res.status(201).json(data);
    })
    .catch(error => {
        return res.status(400).json(error);
    }) 
};


module.exports = {
    getPosts,
    getPost,
    createPost
}