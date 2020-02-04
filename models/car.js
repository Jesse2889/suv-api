const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({ 
  name: { type: String, required: true, unique: true  },  
  price: { type: Number, required: true, min: 1, max: 150000 },
  image: { type: String, required: true },
  description: { type: String, required: true, maxlength: 1000 } 
  //rating: { type: String, required: true, unique: true  }
}, {
  timestamps: true 
})

module.exports = mongoose.model('Car', carSchema)