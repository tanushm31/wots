const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
    user: 'TanushM',
    host:'localhost',
    password:'Cl!ckB@!t',
    database: "wots_db",
})
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  })





app.post('/create',(req,res)=>
    {
        console.log(req.body)
        const name = req.body.name
        const age = req.body.age
        const phone = req.body.phone

        db.query('INSERT INTO testtable (name,age,phone) VALUES (?,?,?)',[name,age,phone],(err,result)=>
        {
            if(err){
                console.log(err)
            }
            else{
                res.send("Values Inserted")
            }
        }
        )

    }
)

app.get("/wots", (req, res) => {
    db.query("SELECT * FROM testtable", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Succesful backend addiiton")
        res.send(result);
      }
    })
  })

app.put('/update',(req,res)=>{
  const id = req.body.id
  db.query("UPDATE testtable SET  age = ? WHERE id = ?",[req.body.age,id],(err,result)=>
  {
    if(err){
      console.log(err)
    }
    else{
      res.send(result)
    }
  }
  )

})
app.delete('/delete/:id',(req,res)=>{
  const id = req.params.id
  db.query("DELETE FROM testtable WHERE ID = ?",id,(err,result)=>{
    if(err){
      console.log(err)
    }
    else{res.send(result)}
  })
})
app.listen(3001,()=>
    {
        console.log("Yay, your server is running on port 3001");
    }
)