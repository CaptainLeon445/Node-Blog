const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config({path: "./config.env"})
const app=require("./app")
const DB=process.env.DATABASE
// console.log(process.env) 

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}).then(con=>{
    console.log("Database Connection Successful")
}).catch(err=>{
    console.log(err, "DB ERROR")
})
const port = 8000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})