const path =require("path");
const express =require("express");
const app =express();
const hbs=require("hbs");
// from the path module in Node.js path.join is used to add directory
const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../template");
const partialsPath=path.join(__dirname,"../template/partials");

app.set("view engine","hbs");
app.set("views",templatePath);

hbs.registerPartials(partialPath);


// we have to install the template engine
// to use the template read the documentation properly
// app.get("",(req,res)=>{
//   res.render("index");

//   // this will render the file with extension with hbs
// });
// built in middleware
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
  res.send("Hello");
});
app.listen(3000,"127.0.0.1",()=>{
    console.log("Listening on port 3000!")
})