const express = require('express');
const app=express();
const postRouter=require('./Routers/postsRoutes')

app.use(express.json());

app.use('/v1/api/posts', postRouter)

module.exports=app;
