import mongoose, { Schema } from 'mongoose';

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
    type: Date,
    require: true
  }
});

export default mongoose.model('Food', Food);
