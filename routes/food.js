import { Router as router } from 'express';
import mongoose from 'mongoose';
import Food from '../models/Food';

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

module.exports = router;
