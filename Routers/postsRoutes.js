const express = require('express');

const app=express();

app.get('/v1/api/posts', (req, res)=>{
    res.status(200).json({
        "Message":"testing"
    })
})

app.post('/v1/api/posts', (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})
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
