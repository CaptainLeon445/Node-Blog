
exports.getPosts=(req, res)=>{
    res.status(200).json({
        "Message":"testing"
    })
}

exports.getPost=(req, res)=>{
    res.status(200).json({
        "Message":"testing"
    })
}

exports.createPost=(req, res)=>{
    console.log(req.body)
    res.status(201).json({
        "Message":"created"

    })
}

exports.updatePosts=(req, res)=>{
    res.status(201).json({
        "Message":"testing"
    })
}

exports.delPost=(req, res)=>{
    res.status(204).json({
        "Message":"testing"
    })
}


