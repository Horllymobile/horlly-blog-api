const Article = require('../models/Article');

const getPosts = async (req, res) => {
    try {
        const posts = await Article.find();
        return res.json(posts);
    } catch (error) {
        return res.send(error.message);
    }
};

const createPost = async (req, res) => {
    try {
        const post = new Article(req.body);

         post.save().then(data => {
            return res.status(201).json(data);
        })
    } catch (error) {
        return res.status(400).send(error);
    }
};


module.exports = {
    getPosts,
    createPost
}