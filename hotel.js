const express =require('express')
const mongoose=require('mongoose')
const router=require('./routes/router')
const hotelModel=require('./models/hotelModel')
const customerModel=require('./models/customerModel')
const app=express()
const port=8000


app.use('/hotel',router)
app.use(express.json())

app.get('/',async(req,res)=>{
    try{
        res.send('Hello Customers!!!!!!');
    }
    catch(err){
        console.log(err.message);
    }
})


app.post('/customer/review',async(req,res)=>{
    const {customerName}=req.body
    const {review}=req.body
    const {hotelId}=req.body
    try{
    const hotel=await hotelModel.findById(hotelId);
    console.log(hotel);
    if(hotel){
        const updateHotel=await hotelModel.updateOne(
            { _id: hotelId },
            { $push: { review:{
                feedback:review,
                customerName:customerName
            } } }
        )
    res.json(updateHotel)
    }
    else{
        console.log('id not found...');
        res.send('id not found. please check id again....')
    }
    const customer=await customerModel.create({
        customerName,
        review,
        hotelId

    })
        await console.log('successfully added!!');
        // await res.json({customer:customer})
    }
    catch(err){
        console.log(err.message);
    }
})


mongoose.connect("mongodb+srv://baddelamanikanta2:0W80pz1mqS36YzFj@cluster0.tsw6vrk.mongodb.net/test")
.then((res)=>{
    console.log('db connected..');
}).catch((err)=>{
    console.log(err.message);
})

app.listen(port,async(req,res)=>{
    await console.log(`server running on ${port}`);
})