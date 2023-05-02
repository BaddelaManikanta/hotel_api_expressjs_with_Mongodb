const mongoose=require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const hotelsModel=new mongoose.Schema({
    hotelName:{
        type:String,
    },
    address:{
        street:{
            type:String,
        },
        city:{
            type:String,
        },
        state:{
            type:String,
        },
        country:{
            type:String,
        }
    },
    review:[{
        customerName:{
            type:String,
            ref:'customer'
        },
        feedback:{
            type:String
        },
        _id:false
    }]
})




module.exports=mongoose.model('hotel',hotelsModel)