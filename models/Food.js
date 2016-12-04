const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Food = new Schema({
  name: {
    type: String,
    require: true
  },
  UPC: {
    type: String,
    require: false
  },
  exp: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model('Food', Food);
