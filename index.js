const express = require("express");

const app = express();

const Algorithim = require("./passwordAlgorithim");


const newAlgo = new Algorithim();

app.post("/securePassword/:id", (req,res,next)=> {
    
    let myObj ={};

    newAlgo.secureKey(req.params.id).then(encryptedValue => {
        myObj = {
            data:{
                status:200,
                message:"Secure Password Generated",
                secure_key : encryptedValue
            }
        };
        res.send(myObj);
    })
    .catch(err => {
    console.error(err);
    });    
});

app.listen(5000, () => {
    console.log("Node Server is up and running");
});