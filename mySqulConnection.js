const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"",
  databasae: "test",
});

conn.connect((err) => {
  if (err) {
    console.warn("error" , err);
  } else {
    console.warn("connected");
  }
});

conn.query("select * from users" , (err , result) => {
    console.warn("result" , result)
}  ) 