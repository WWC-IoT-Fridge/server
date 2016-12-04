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
  //logic here
})

module.exports = router;

// GET api/food/
// GET api/food/expiresSoon --expires in the next 3 days
// GET api/food/expired --already expired
//
// POST api/food
// DELETE api/food/:id
