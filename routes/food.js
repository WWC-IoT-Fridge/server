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
  chips.name = "String Cheese";
  chips.UPC = "2348962938";
  chips.exp = "2016-12-06";

  var dip = {
  	name : "Daiya Cheese",
  	UPC : "8266234896923",
  	exp : "2016-12-05"};

  var soda = {
  	name : "kombucha",
  	UPC : "348577289483",
  	exp : "2016-11-05"};


  var yogurt = {
  	name : "Yogurt",
  	UPC : "348579664846",
  	exp : "2016-11-07"};

  var foods = [yogurt, chips, dip, soda];


  res.send(foods);

})

router.get('/expired', (req, res) => {
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

});

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('success');
});

module.exports = router;

// GET api/food/
// GET api/food/expiresSoon --expires in the next 3 days
// GET api/food/expired --already expired
//
// POST api/food
// DELETE api/food/:id
