const express=require('express');
const router=express.Router();
const Menu=require('./../models/Menu');

router.post('/',async(req,res)=>{
    try{
    const data=req.body;
    const newMenu= new Menu(data);
    const response= await newMenu.save();
    console.log('Data saved');
    res.status(500).json(response);
    }
    catch(err){
        console.log(err);
        res.status(404).json({Error: 'Some error occured'});
    }

})

router.get('/',async(req,res)=>{
    try{
        const data=await Menu.find();
        console.log('Data fetched');
        res.status(500).json(data);
    }
    catch(err){
        console.log(err);
        res.status(404).json({Error : 'Internal Server Error'});
    }
})


router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
    if(workType=='chef' || workType=='manager' || workType=='waiter'){
         
const response=await Person.find({work: workType});
console.log('response fetched');
res.status(200).json(response);

    }else{
        res.status(404).json({error: 'Invalid work Type'});
    }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})





















module.exports=router;