//import the model  
const Todo = require("../models/todo");


//define router handeler
exports.updateTodo = async(req,res)=>{
    try{
        const{id}=req.params;
        const {title,desciption} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
        {title,desciption,updatedAt:Date.now()},
        )

        res.status(202).json({
            success:true,
            data:todo,
            message:"Updated successfully"
        })
    }
    catch(err){
        console.error(err);
        res.status(404).json({
            success:false,
            error:err.message,
            message:"server error"
        })
    }
}