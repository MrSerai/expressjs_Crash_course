const express= require('express');
const path=require('path');
const app= express();
const bodyParser = require('body-parser')    
const logic = require('./logic')

app.use(bodyParser.json({
    limit: "50mb"
}))
/*
app.use(bodyParser.urlencoded({
    limit: "50mb"
}))
*/
app.get('/hello',(req,res)=>{
 res.send('<h1> Hello World... </h1>')
});

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server started on port ${PORT}`));

app.post("/submitPurchases", (req,res)=> {
    let data = req.body;
    data.forEach(row => {
        let documentId = logic.generateInvoice(row);
        let vat = logic.calculateVAT(row.price, 15);
        console.log(row["customer name"], documentId, vat)
        // update database record
        // send email confirming purchase
    });
})
