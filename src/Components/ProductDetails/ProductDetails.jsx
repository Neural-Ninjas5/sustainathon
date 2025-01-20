import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api-helper/apiProduct';
import { Box, Grid, Typography, Button } from '@mui/material';
import OtherContent from '../OtherContent/OtherContent';
import Header from '../Header/Header';
import { useCart } from '../../context/cartContext'; // Use the context

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const { addToCart } = useCart();

  React.useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    console.log('Product added to cart:', product);
  };

  const handleBuyNow = () => {
    // Implement your logic for buy now
    console.log('Product bought now:', product);
  };

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  const { name, imageSrc, imageAlt, price, manufacturer, description } = product;

  return (
    <>
      <Header />
      <Box marginLeft={20}>
        <Box p={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <img src={imageSrc} alt={imageAlt} style={{ maxWidth: '100%', height: 'auto' }} />
            </Grid>
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

      <Box>
        <OtherContent product={product} />
      </Box>
    </>
  );
};

export default ProductDetails;
