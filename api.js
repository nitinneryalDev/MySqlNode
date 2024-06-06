const express = require("express");
const db = require("./DBfile");
const mongodb = require('mongodb')
const app = express();

app.use(express.json())

app.get("/", async (req, res) => {
  let data = await db();
  recdata = await data.find().toArray();

  // console.log(recdata);
  res.send();
});

app.post("/", async (req, res) => {
  let data = await db();
  let result =  await data.updateOne({name:""})
  // console.log(req.body)
  res.send({result});
});

app.put('/:name' , async (req , res) => {  
    let data =  await db()
    let result =  await data.updateOne({name:req.params.name  },{$set:req.body}  )
  //  console.log(req.body)
  res.send( {result:'updated'})
} )

app.delete("/:id" ,  async (req , res) => {
  console.log(req.params.id)
  let data =  await db()
  let result =  await data.deleteOne({ _id:new mongodb.ObjectId(req.params.id)  })
  res.send("done")
} )


app.listen(5000);
