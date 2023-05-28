const express = require('express');
const Router=require("./Routers/postsRoutes")
const port = 8000;
const app=express();


app.use(express.json());

app.use(Router)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
