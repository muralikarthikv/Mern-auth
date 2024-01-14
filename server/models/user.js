const {mongoose}=require('mongoose')
const {Schema}=mongoose

const useSchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})
const userModel=mongoose.model('User',useSchema)
module.exports=userModel;