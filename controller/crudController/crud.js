const db = require('../../models/index');     //imported db from models
const { where, Op } = require("sequelize");  



//create controller
exports.create = async(req,res)=>{
    try {
        const {name,age,gender}=req.body;
        const createdUser = await db.Users.create({
            name,age,gender
        })
        res.send({
            message:"User Created Successfully",
            createdUser})
    } catch (e) {
        console.log(e);
        res.status(500);
        res.send({
            message:"internal server error"
        })
    }
}


//delete controller
exports.delete = async(req,res)=>{
    try {
        const {id} = req.body;
        await db.Users.destroy({
            where:{
                id:id
            }
        })
        res.status(200)
        res.send({
            message:"User deleted successfully"
        })
    } catch (e) {
        console.log(e);
        res.status(500);
        res.send({
            status:500,
            message:"internal server error"
        })
    }
}

//read controller
exports.usersList = async(req,res)=>{
    try {
        const listOfUsers = await db.Users.findAll()
        res.status(200)
        res.send({
            message:"Users List Fetched Successfully",
            listOfUsers
        })
    } catch (e) {
        console.log(e);
        res.status(500);
        res.send({
            status:500,
            message:"internal server error"
        })
    }
}