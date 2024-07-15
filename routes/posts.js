import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost, } from '../controllers/postController.js'
// import {
//     getPosts,
//     getPost,
//     createPost,
//     updatePost,
//     deletePost,
// } from '../controllers/postController.js';
// import { getPost } from '../controllers/postController';
const router = express.Router();



// GET all posts
router.get('/', getPosts);

// get single post
router.get('/:id', getPost);

// create new post
router.post('/', createPost);

// Update Post
router.put('/:id', updatePost);

// Delete post

router.delete('/:id', deletePost);


export default router;