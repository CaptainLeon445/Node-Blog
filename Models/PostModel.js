const mongoose=require("mongoose")
const slugify=require("slugify")


const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true, "Please add title"],
        minlength:[6, "Title should be at least six characters"],
        maxlength:[100, "Title should not be more than 100 characters"],
        trim:true,
        unique:true,
        },
    author:{
        type:String,
        required:[true, "Please add Author"],
        minlength:[3, "Author should be at least six characters"],
        maxlength:[100, "Author should not be more than 100 characters"],
        trim:true,
    },
    content:{
        type:String,
        required:[true, "Content cannot be blank."],
        trim:true,
    },
    slug:String,
    category:{
        type:String,
        required:[true, "Please add category"],
        minlength:[3, "Category should be more than three characters"],
        maxlength:[50, "Category should be more than fifty characters"],
        trim:true,
    },
    tags:{
        type:String,
        minlength:[3, "Category should be more than three characters"],
        maxlength:[50, "Category should be more than fifty characters"],
        trim:true,
    },
    image:{
        type:String,
        default:"https://res.cloudinary.com/djxxsjxss/image/upload/v1601181209/default_image_post.png",
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        select:false
    },
    
    })

const Blog=mongoose.model("BlogPost", postSchema)
module.exports=Blog;
