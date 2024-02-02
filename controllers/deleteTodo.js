// import model
const Todo = require('../models/todo');


//define route handler
exports.deleteTodo= async(req,res)=>{
    try{
        const {id} =req.params;
        
        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"todo deleted"
        })
    }
    catch(err){
        console.error(err);
        req.status(404).json({
            success:false,
            error:err.message,
            message:"Server error"
        })
    }
}