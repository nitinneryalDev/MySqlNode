const express = require("express");
const EventEmitter = require('node:events');
// const { EventEmitter } = require("stream");
const app = express();



const event = new EventEmitter();
let count = 0
event.on("countAPI" , () => {
  count++;    
     console.log('event Called' , count ) 
} )

app.get ("/",
  (req , res) => {
    res.send("api send")
    event.emit("countAPI")
  }); 

  app.get("/search",
  (req, res) => {
    res.send("Search Api Called");
    event.emit("countAPI")

  })


  app.get("/update",
  (req, res) => {
    res.send("Update API called");
    event.emit("countAPI")  
  });

app.listen(5000);
