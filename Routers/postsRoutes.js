const express = require('express');
const { getPosts, createPost, updatePosts, getPost, delPost } = require('../Controllers/postsControllers');
const router=express.Router();

const app=express();

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


app.get('/v1/api/posts', 
)


app.post('/v1/api/posts', )
app.patch('/v1/api/posts/:id', (req, res)=>{
    res.status(200).json({
        "Message":"testing"
    })
})
app.delete('/v1/api/posts/:id', (req, res)=>{
    res.status(200).json({
        "Message":"testing"
    })
})

module.exports = app;
