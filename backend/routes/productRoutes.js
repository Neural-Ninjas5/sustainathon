// const express = require('express');
// const productController = require('../controllers/productController'); // Adjust the path according to your project structure

// const router = express.Router();

// // Define routes and use the controller methods
// router.post('/products', productController.createProduct);
// router.get('/products', productController.getAllProducts);
// router.get('/products/:id', productController.getProductById);
// router.patch('/products/:id', productController.updateProductById);
// router.delete('/products/:id', productController.deleteProductById);

// module.exports = router;

const express = require('express');
const productController = require('../controllers/productController'); // Adjust the path according to your project structure
const router = express.Router();

router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.get('/products/:id/price/:wattage', productController.getPriceByWattage);
router.patch('/products/:id', productController.updateProductById);
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;

