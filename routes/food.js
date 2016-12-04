const router = require('express').Router();
const mongoose = require( 'mongoose' );
const Food = require('../models/Food');

//GET all food in fridge
router.get('/', (req, res) => {
  Food.find()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send(err);
  });
});

router.get('/expiresSoon', (req, res) => {
  //Food.where('exp').
  var chips = {};
  chips.name = "Chips";
  chips.UPC = "99999999";
  chips.exp = "2016-12-03";

  var dip = { 
  	name : "Chip Dip", 
  	UPC : "123456",
  	exp : "2016-12-01"};

  var soda = {
  	name : "Fizzy Drink",
  	UPC : "898989898",
  	exp : "2016-11-02"};

  var foods = [chips, dip, soda];	
 

  res.send(foods);

})

module.exports = router;

// GET api/food/
// GET api/food/expiresSoon --expires in the next 3 days
// GET api/food/expired --already expired
//
// POST api/food
// DELETE api/food/:id
