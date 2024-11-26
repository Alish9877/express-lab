const express = require('express')

const app = express()

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

//Q1
app.get('/greetings/:name', (req,res) => {
  console.log(req.params.name)
  res.send(`  Hello there, ${req.params.name}!`)
})

//Q2
app.get('/roll/:Number', (req,res)=> {
  console.log(req.params.Number)
  res.send(`<h1> Item ${req.params.Number} </h1>`)

})


//Q3
app.get('/collectibles/:index', (req,res)=> {
  console.log(req.params.collectibles)
  res.send(`<h1> So, you want the ${req.params.collectibles[index]} </h1>`)

})




app.listen(3000,()=> {
  console.log('listeinig on port 3000')
})