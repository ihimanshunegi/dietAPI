const express= require("express");
const app=express();

const PORT= process.env.PORT || 5000;

const dietPlan_routes = require("./routes/dietPlan");
app.get("/", function(req, res){
    res.send("Hi, I am live");
})

//middleware or to set router
app.use("/api/dietPlan",dietPlan_routes) 

const start= async() =>{
    try{
        app.listen(PORT,()=>{
            console.log('Connected:',PORT);
        });
    }
    catch(e){
        console.log(e);
    }
}
start();