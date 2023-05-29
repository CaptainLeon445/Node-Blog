const express = require('express');
const { getPosts, createPost, updatePosts, getPost, delPost } = require('../Controllers/postsControllers');
const router=express.Router();

router
    .route('/')
    .get(getPosts)
    .post(createPost)

router
    .route('/:id')
    .get(getPost)
    .patch(updatePosts)
    .delete(delPost)

module.exports=router;
