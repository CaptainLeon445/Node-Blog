const blog = require("./../Models/PostModel");

exports.getPosts = async (req, res) => {
  try {
    const Posts = await blog.find();
    res.status(200).json({
      status: "Success",
      results: Posts.length,
      data: Posts,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const Post = await blog.findById(id);
    res.status(200).json({
      status: "Success",
      results: Post.length,
      data: Post,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    const Post = await blog.create(req.body);
    res.status(201).json({
      status: "Success",
      data: Post,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updatePosts = async (req, res) => {
  try {
    const id = req.params.id;
    const Post = await blog.findByIdAndUpdate(id);
    res.status(201).json({
      status: "Success",
      data: Post,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.delPost = (req, res) => {
  const id = req.params.id;
  const Post = blog.findByIdAndDelete(id);
  res.status(204).json({
    status: "Success",
    data: null,
  });
};
