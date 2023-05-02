const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')



const customerModel=mongoose.Schema({
    customerName:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    hotelId:{
        type:ObjectId,
        required:true,
        ref:'hotel'
    }
})

module.exports=mongoose.model('customer',customerModel)
