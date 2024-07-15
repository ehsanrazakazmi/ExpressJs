let posts = [
    { id: 1, title: "post1" },
    { id: 2, title: "post2" },
    { id: 3, title: "post3" },
];



// @desc GET all posts
// @route GET /api/posts
export const getPosts =
    (req, res, next) => {
        const limit = parseInt(req.query.limit);
        if (!isNaN(limit) && limit > 0) {         // if that limit number is actually a number and it is greater than 0
            return res.status(200).json(posts.slice(0, limit));
        }

        res.status(200).json(posts);

    }

// @desc GET single posts
// @route GET /api/posts/id

export const getPost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        // return res.status(404).json({ warn: `A post with id of ${id} was not found` })
        const error = new Error(`A post with id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    res.status(200).json(post);

    // res.status(200).json(posts.filter((post) => post.id === id ));
}




// @desc create new post
// @route POST /api/posts

export const createPost = (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };
    if (!newPost.title) {
        const error = new Error(`Please include a title`);
        error.status = 400;
        return next(error);
    }
    posts.push(newPost);
    res.status(201).json(posts);
}

// @desc update a post
// @route PUT /api/posts/id

export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`Please include a title`);
        error.status = 400;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
}




// @desc DELETE a post
// @route DELETE /api/posts/id

export const deletePost = (req, res, next) => {

    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`Please include a title`);
        error.status = 400;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);

}