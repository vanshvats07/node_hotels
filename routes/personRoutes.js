const express=require('express');
const router=express.Router();
const person=require('./../models/Person');
const { findByIdAndUpdate } = require('../models/Menu');

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newPerson= new Person(data);
        const response= await newPerson.save();
        console.log('Data saved successfully');
        res.status(200).json('Data saved ');
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Some error occurred'});
    }
});

router.get('/',async(req,res)=>{
    try{
        const data= await Person.find();
        res.status(200).json('Data fetched successfully');
    }
    catch(err){
        console.log(err);
        res.status(404).json({error: 'Some error occured'});
    }
});

router.put('/:id',async(req,res)=>{
    try{
    const personId= req.params.id;
    const updatePersonData = req.data;
    const response= await Person.findByIdAndUpdate(personId,updatePersonData);
    if(!response){
        res.status(404).json({error: 'Some error occured'});
    }

     
    console.log('data updated successfully');
    res.status(200).json(response);

}catch(err){
    console.log(err);
res.status(404).json({error: 'Unable to update data'});    
}
})

//comment for testing github

module.exports=router;





























