const express = require("express");
const app = express();
const con = require("./config");

app.use(express.json())

app.get("/", (req, res) => {
//   res.send("route done");
  con.query("select * from users", (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});


app.post("/" , (req , res) => {
    const data = req.body;
    // {name:"Bhaskar" , password:"7373" ,user_type:"user" };
    con.query('Insert INTO userS SET ?' , data , (error , result , fields) => {
       if(error) error;
       res.send(result) 
    } )
} )

app.put("/:id" , (req , res) => {
    const data = [req.body.name , req.body.password , req.body.user_type , req.params.id];
    con.query("UPDATE users SET name = ? , password = ? , user_type= ? where id = ?" , data , (err ,  result , fields) => {
    if(err) throw error ;
    res.send(result)
    } )
} )

app.delete("/:id" , (req , res) => {
    con.query("DELETE FROM users WHERE id = " + req.params.id , (err , result ) => {
             if(err) throw  error ;
             res.send(result)
    } )
} )




app.listen(5000);
