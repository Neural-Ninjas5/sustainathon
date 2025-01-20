// const Product = require('../models/Product'); // Adjust the path according to your project structure

// // Create a new product
// exports.createProduct = async (req, res) => {
//   try {
//     const product = new Product(req.body);
//     console.log(req.body); 
//     await product.save();
//     res.status(201).send(product);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// // Get all products
// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).send(products);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// // Get a product by ID
// exports.getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).send();
//     }
//     res.status(200).send(product);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// // Update a product by ID
// exports.updateProductById = async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = [
//     'name', 'imageSrc', 'imageAlt', 'price', 'wattage', 'efficiency',
//     'dimensions', 'weight', 'voltage', 'current', 'warranty', 'manufacturer',
//     'type', 'certifications', 'temperatureCoefficient', 'installationOptions',
//     'availabilityStatus', 'description'
//   ];
//   const isValidOperation = updates.every(update => allowedUpdates.includes(update));

//   if (!isValidOperation) {
//     return res.status(400).send({ error: 'Invalid updates!' });
//   }

//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).send();
//     }
//     updates.forEach(update => product[update] = req.body[update]);
//     await product.save();
//     res.status(200).send(product);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// // Delete a product by ID
// exports.deleteProductById = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndDelete(req.params.id);
//     if (!product) {
//       return res.status(404).send();
//     }
//     res.status(200).send(product);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

const Product = require('../models/Product'); // Adjust the path according to your project structure

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    console.log(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send();
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get price by product ID and wattage
exports.getPriceByWattage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send();
    }
    const priceOption = product.prices.find(option => option.wattage === req.params.wattage);
    if (!priceOption) {
      return res.status(404).send({ error: 'Wattage option not found' });
    }
    res.status(200).send({ price: priceOption.price });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a product by ID
exports.updateProductById = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'name', 'imageSrc', 'imageAlt', 'prices', 'manufacturer',
    'description', 'features', 'whatsInTheBox', 'dimensions', 'applicationArea',
    'panelType', 'numberOfCells', 'openCircuitVoltageVoc', 'shortCircuitCurrentIsc',
    'maximumPowerVoltageVmp', 'maximumPowerCurrentImp', 'warranty', 'modelName',
    'countryOfOrigin', 'marketedBy', 'customerCareDetails'
  ];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send();
    }
    updates.forEach(update => product[update] = req.body[update]);
    await product.save();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a product by ID
exports.deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send();
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

