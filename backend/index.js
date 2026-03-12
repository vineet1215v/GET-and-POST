const express = require("express");
const app = express();
const port = 8000;

//Parse POST request data(middlewares)
app.use(express.urlencoded({extended:true}));

//if data send in json format from frontend(postman or thunderclient)
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user, password} = req.query;
    res.send(`This is the GET Response,welcome ${user}`);
});

app.post("/register",(req,res)=>{
    // console.log(req.body);
    let {user, password} = req.body;
    res.send(`This is the POST Response,welcome ${user}`);
});



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
