const express = require("express");
const app = express();
const PORT = 5000

const bodyParser = require('body-parser');

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.get('/about', (req, res) => {
    res.send("This is about route");
})

//dynamic route with the parameter

app.get('/user/:id', (req, res) => {
    console.log('Req', req.params.id);

    const userId = req.params.id
    res.send(`The request is from this user: ${userId}`);
})

app.post('/submit', (req, res) =>{
    // console.log(req.body.name);
  const name = req.body.name
  res.send(`Form is submitted by ${name}`)
  
})


app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
})
