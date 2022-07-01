const Blog = require('../models/blog');

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => {
            console.log(err);
            res.render('404', { title: 'Blog not found' });
        });
}

const blog_create_get = (req, res) => {
    res.render('create', { title: 'Create a new blog' });
}

const blog_create_post = (req, res) => {
    console.log("yaha pohoncha");
    const blog = new Blog(req.body);
    blog.save()
        .then(result => {
            console.log("yaha pohoncha");
            res.redirect('/exp');
        })
        .catch(err => {
            console.log(err);
        });
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/exp' });
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}