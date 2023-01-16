const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
    trim: true
  },
  duration: {
    type: Number,
    required: [true, "A tour must have a duration"]
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A tour must have a size"],
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have a difficulty"],
  },
  rating: {
    type: Number,
    default: 4.5
  },
  ratingsAverage: {
    type: Number, 
    default: 4.5
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
  priceDiscount: String,
  summary: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  }, 
  imageCover: {
    type: String,
    required: [true, "A tour must have a image cover"],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  startDates: [Date]
})

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;