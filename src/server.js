
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const port = 3000

let db = []
let id = 1

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get("/", (req, res) => {
  res.send("Fisk");
})
.post('/', (req, res) => {
  let user = req.body
  user.id = id
  id++
  db.push(user)
  console.log(db)
    res.send("user added to database")
})
.get("/:id", (req, res) => {
  console.log(db.length);
  for (let i = 0; i < db.length; i++) {
    if (db[i].id == req.params.id) {
      res.send(db[i])
      break
    } else{
      console.log("ikke denne gang");
      continue
    }
    
  }
})
.delete("/:id", (req, res) =>{
})



app.listen(port, () => {
  console.log(`Server open on port ${port}`);
});
