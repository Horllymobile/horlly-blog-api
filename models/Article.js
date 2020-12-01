const { model, Schema } = require('mongoose');
const Comments = new Schema({
    title: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    body: {
        type: String,
        required: true
    }
});


const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 150
    },
    body: {
        type: String,
        required:  true,
        minlength: 300,
    },
    author: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    date: {
        type: Date,
        default: Date.now
    },
    comments: [Comments]
})

module.exports = model('Article', articleSchema);