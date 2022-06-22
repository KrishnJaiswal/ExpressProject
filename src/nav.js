const express=require('express')
const app=express();

// app.get('/',(req,res)=>{
//     res.send("Welcome to Home route");
// });
app.get('/temp',(req,res)=>{
    res.send([
        {
        id:3,
        name:"Krishna",
    },
    {
        id:3,
        name:"Krishna",
    },
    {
        id:3,
        name:"Krishna",
    }
]);
});

app.listen(3000,()=>{
    console.log("Server is working");
});
