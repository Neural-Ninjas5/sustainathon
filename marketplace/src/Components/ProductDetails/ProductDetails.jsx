import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api-helper/apiProduct';
import { Box, Grid, Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import OtherContent from '../OtherContent/OtherContent';
import Header from '../Header/Header';
import { useCart } from '../../context/cartContext'; // Use the context

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [selectedWattage, setSelectedWattage] = React.useState('');
  const [price, setPrice] = React.useState('');
  const { addToCart } = useCart(); // Destructure addToCart from useCart

  React.useEffect(() => {
    getProductById(id)
      .then((data) => {
        setProduct(data);
        if (data.prices.length > 0) {
          setSelectedWattage(data.prices[0].wattage);
          setPrice(data.prices[0].price);
        }
      })
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  const handleWattageChange = (event) => {
    const wattage = event.target.value;
    setSelectedWattage(wattage);
    const priceObj = product.prices.find(price => price.wattage === wattage);
    setPrice(priceObj ? priceObj.price : '');
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedWattage,
      price
    };
    addToCart(productToAdd);
    console.log('Product added to cart:', productToAdd);
  };

  const handleBuyNow = () => {
    console.log('Product bought now:', product);
  };

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  const { name, imageSrc, imageAlt, manufacturer, description } = product;

  return (
    <>
      <Header />
      <Box marginLeft={20}>
        <Box p={5}>
          <Grid container spacing={3}>
            {/* Left side with small image */}
            <Grid item xs={12} md={4}>
              <img src={imageSrc} alt={imageAlt} style={{ maxWidth: '100%', height: 'auto' }} />
            </Grid>

            {/* Right side with product details */}
            <Grid item xs={12} md={5} marginLeft={20}>
              <Box p={10} boxShadow={2} bgcolor="background.paper" borderRadius={4}>
                <Typography variant="h4" gutterBottom>
                  {name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Manufacturer: {manufacturer}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Price: ₹{price}
                </Typography>
                <Typography variant="body1">
                  Description: {description}
                </Typography>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Select Wattage</InputLabel>
                  <Select
                    value={selectedWattage}
                    onChange={handleWattageChange}
                    label="Select Wattage"
                  >
                    {product.prices.map((option, index) => (
                      <MenuItem key={index} value={option.wattage}>
                        {option.wattage} - ₹{option.price}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box mt={2}>
                  <Button variant="contained" color="primary" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                  <Button variant="contained" color="secondary" onClick={handleBuyNow} style={{ marginLeft: '10px' }}>
                    Buy Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Other Content */}
      <Box>
        <OtherContent product={product} />
      </Box>
    </>
  );
};

export default ProductDetails;
