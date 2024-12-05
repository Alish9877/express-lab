const express = require('express')

const app = express()

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

//Q1
app.get('/greetings/:name', (req,res) => {
  console.log(req.params.name)
  res.send(`  Hello there, ${req.params.name}!`)
})

//Q2
app.get('/roll/:Number', (req,res)=> {
  const numberParm = req.params.Number
  const Maximum = parseInt(numberParm,10)
  if (!Maximum) {
  return res.status(400).json({error: 'Invalid operation'})
  }
else {
  const randomroll = Math.floor(Math.random() * Maximum)
res.send(`the number is ${randomroll} `)}
})



//Q3
app.get('/collectibles/:index', (req,res)=> {
  index = req.params.index
res.send(`So, you want the ${collectibles[index].name}? For ${collectibles[index].price}, it can be yours!`)
})


//Q4
app.get('/shoes', (req, res) => {
  const { 'min-price': minPrice, 'max-price': maxPrice, type } = req.query;

  let filteredShoes = shoes;
  if (minPrice) {
    const min = parseFloat(minPrice);
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= min);
  }

  if (maxPrice) {
    const max = parseFloat(maxPrice);
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= max);
  }

  if (type) {
    filteredShoes = filteredShoes.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase());
  }
  res.json(filteredShoes);
});


app.listen(3000,()=> {
  console.log('listeinig on port 3000')
})