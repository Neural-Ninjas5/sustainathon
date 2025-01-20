const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  imageSrc: { 
    type: String, required: true 
  },
  imageAlt: { 
    type: String, required: true 
  },
  prices: [
    {
      wattage: { type: String, required: true },
      price: { type: String, required: true }
    }
  ],
  manufacturer: { 
    type: String, required: true 
  }, 
  description: { 
    type: String 
  },
  features: {
    type: String,
    required: true
  },
  whatsInTheBox: {
    type: String,
    required: true
  },
  dimensions: {
    type: String,
    required: true
  },  
  wattage: {
    type: String,
    required: true
  },
  applicationArea: {
    type: String,
    required: true
  },
  panelType: {
    type: String,
    required: true
  },
  numberOfCells: {
    type: Number,
    required: true
  },
  openCircuitVoltageVoc: {
    type: String,
    required: true
  },
  shortCircuitCurrentIsc: {
    type: String,
    required: true
  },
  maximumPowerVoltageVmp: {
    type: String,
    required: true
  },
  maximumPowerCurrentImp: {
    type: String,
    required: true
  },
  warranty: {
    type: String,
    required: true
  },
  modelName: {
    type: String,
    required: true
  },
  countryOfOrigin: {
    type: String,
    required: true
  },
  marketedBy: {
    type: String,
    required: true
  },
  customerCareDetails: {
    type: String,
    required: true
  } 
});

module.exports = mongoose.model('Product', ProductSchema);

// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   imageSrc: { type: String, required: true },
//   imageAlt: { type: String, required: true },
//   prices: [
//     {
//       wattage: { type: String, required: true },
//       price: { type: String, required: true }
//     }
//   ],
//   manufacturer: { type: String, required: true },
//   description: { type: String },
//   features: { type: String, required: true },
//   whatsInTheBox: { type: String, required: true },
//   dimensions: { type: String, required: true },
//   applicationArea: { type: String, required: true },
//   panelType: { type: String, required: true },
//   numberOfCells: { type: Number, required: true },
//   openCircuitVoltageVoc: { type: String, required: true },
//   shortCircuitCurrentIsc: { type: String, required: true },
//   maximumPowerVoltageVmp: { type: String, required: true },
//   maximumPowerCurrentImp: { type: String, required: true },
//   warranty: { type: String, required: true },
//   modelName: { type: String, required: true },
//   countryOfOrigin: { type: String, required: true },
//   marketedBy: { type: String, required: true },
//   customerCareDetails: { type: String, required: true }
// });

// module.exports = mongoose.model('Product', ProductSchema);
