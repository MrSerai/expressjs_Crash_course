const express=require('express');
const router=express.Router();


//adding a route(simple rest api) to get all members
app.get('/api/members',(req,res)=>{
    //returning the members' array using JSON (no need to convert/format it to string the JSON method will automatically do that for us)
    res.json(members);});
    
    
    
    //adding a route to get a SINGLE MEMBER(the id is an input that comes as part of the url)
    router.get('/api/members/:id'/*the id will get send AS  part of the url*/,(req,res)=>{
    const found = members.some(member=>member.id===parseInt(req.params.id));//this method checks if the id sent by the URL  exist in list of members in the class MEMBERS
    if(found/*IF THE METHOD RETURNS A TRUE VALUE IT WILL EXECUTE*/){
        res.json(members.filter(member=>member.id===/*using the triple equal to compare different data types*/parseInt/*we nned to change the data type of the recieved id using the parseInt method*/(req.params.id)));//filtering result based on a condition thats equal to a specific id sent with the request in the url
    }else{
        res.status(400).json({msg:`No member of id ${req.params.id}`});//instead of having the result returning a null value, this will return an error message 
    }
    });
    
    