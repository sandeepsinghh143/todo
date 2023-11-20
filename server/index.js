const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const User = require("./models/user");
const bodyParser = require("body-parser");

//middle ware names cross origin resource sharing
//its is use to share data from server to client using axios call
//we can also use it only on single route also like
// app.get('/', cors() (req, res) => {
//     res.send('Hello from our server!')
// })
app.use(cors());
app.use(express.json());
express.use(bodyParser.urlencoded({extended:false}))
app.get('/', (req, res) => {
    res.status(200).send('Hello from the server!')
})
app.post("/signup",async (req,res)=>{
    try{
        const {email,password,confirmPassword}=req.body;
        
        if(email && password && confirmPassword){
            if(password!==confirmPassword){
                res.status(500).send({
                    status:500,
                    message:"password doesn't match",
                })
            }
            res.status(201).send({
                status:201,
                message:"user created successfully",
                err:""
            })
        }else{
            res.status(400).send({
                status:500,
                message:"all fields are required",
                err:err
            })
        }
        const user=User.build({
            email:email,
            password:password
        })
        await user.save();
    }
    catch(err){
        res.status(500).send({
            status:500,
            message:"some unknown error occured",
            err:err
        })
    }
})
  User.sync();
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})
