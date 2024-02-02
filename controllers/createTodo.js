//import the model
const Todo = require('../models/todo');


//define the route handeler

//the reason to make this function async is that we never makes a call on network using main thread
//we always use async while interacting with database
exports.createTodo=async(req,res)=>{
    try{
        //extract title and description from request body
        const {title,description}=req.body;
        //create a new todo object and insert into db
        const response = await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry created successfully'
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:'Internal server error',
            message:err.message,
        })
    }
}