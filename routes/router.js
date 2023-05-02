const express=require('express')
const router=express.Router()

const customerModel=require('../models/customerModel')

const hotelModel=require('../models/hotelModel')
const { model, Model, default: mongoose } = require('mongoose')

router.use(express.json())

router.get('/alldata',async(req,res)=>{
    try{
        const data= await hotelModel.find()
        return res.send(data)
    }
    catch(err){
        console.log(err.message);
    }
})

router.get('/review',async(req,res)=>{
    try{
        const data=await customerModel.find()
        res.send(data.review)
    }
    catch(err){
        console.log(err.message);
    }
})

router.get('/:id',async(req,res)=>{
    const hotel=await hotelModel.findById(req.params.id)
    if(hotel){
    console.log('data sent...');
    res.json(hotel)
    }
    else{
        console.log('id not found...');
        res.send('id not found. please check id again....')
    }

})

router.post('/add',async(req,res)=>{
    const {hotelName}=req.body
    const {address}=req.body

    try{
        const hotel1=await hotelModel.create({
            hotelName,
            address

    })
    console.log('successfully added!!');
    await res.send(hotel1)
    }
    catch(err){
        console.log(err.message);
    }
})

router

// router.patch('/update/:id',async(req,res)=>{
//     try{
//         // const hotel=await hotelModel.findOne(h=>h.id===req.params.id)

//         var ObjectId = require('mongodb').ObjectId;
//         hotelModel.findOne({_id:ObjectId(req.params.id)})
//         .exec(async function(err,data){
//             if(!hotel.id) throw new Error('id not found. Please check again!!!')
//             hotel.hotelName=req.body.hotelName
//             await hotel.save()
//             console.log(hotel.hotelName);
//             res.send('Hotel Name successfully Updated.......')
//         })

//         if(!hotel.id) throw new Error('id not found. Please check again!!!')
//         hotel.hotelName=req.body.hotelName
//         await hotel.save()
//         console.log(hotel.hotelName);
//         res.send('Hotel Name successfully Updated.......')
//     }
//     catch(err){
//         res.status(404).send(err.message)
//     }
// })

module.exports=router