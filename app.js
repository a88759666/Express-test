const express = require("express");
const app = express();
const path = require('path')
const portNum = 8088;


const mainRouter = require("./router/main");  
const aboutRouter = require("./router/about");    
const portfolioRouter = require("./router/portfolio");  
const contactRouter = require("./router/contact");  

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/" , (req,res)=>{
  // res.sendFile('index.html', { root: __dirname });
  res.render("index")
  res.send('main')
});
// app.get('/portfolio', function (req, res) {
//   res.sendFile('index.html', { root: __dirname });
// })
// app.get('/about', function (req, res) {
//   res.sendFile('index.html', { root: __dirname });
// })
// app.get('/contact', function (req, res) {
//   res.sendFile('index.html', { root: __dirname });

// })



app.use("/" , aboutRouter);
app.use("/" , mainRouter);
app.use("/" , portfolioRouter);
app.use("/" , contactRouter);

app.listen(portNum , ()=>{
  console.log(`Server is running at localhost:${portNum}`);
});
