const express=require('express');
const path =require('path');
//const moment=require('moment')//importing moment to capture the date and time
const members=require('./Members');//importing the members js file, so i can reference it in the getAllMembers method
const logger=require('./middleware/logger')

//importing the express library
const app=express();


//initializing the middleware
app.use(logger);



//set static folder
// from this folder you should be able to acces any html file in that folder because of the 'PATH' variable 
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>console.log(`server started on port ${PORT}`));