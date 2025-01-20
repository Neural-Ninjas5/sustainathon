import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function AddProducts() {
  const [product, setProduct] = useState({
    name: '',
    imageSrc: '',
    imageAlt: '',
    prices: [
      {
        wattage: '',
        price: ''
      }
    ],
    manufacturer: '',
    description: '',
    features: '',
    whatsInTheBox: '',
    dimensions: '',
    wattage: '',
    applicationArea: '',
    panelType: '',
    numberOfCells: '',
    openCircuitVoltageVoc: '',
    shortCircuitCurrentIsc: '',
    maximumPowerVoltageVmp: '',
    maximumPowerCurrentImp: '',
    warranty: '',
    modelName: '',
    countryOfOrigin: '',
    marketedBy: '',
    customerCareDetails: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handlePriceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPrices = [...product.prices];
    updatedPrices[index][name] = value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      prices: updatedPrices
    }));
  };

  const addPriceField = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      prices: [...prevProduct.prices, { wattage: '', price: '' }]
    }));
  };

  const removePriceField = (index) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      prices: prevProduct.prices.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await axios.post('http://localhost:5000/products', product);
      console.log('Response Data:', response.data);
      setSubmitting(false);
      alert('Product added successfully!');
    } catch (error) {
      console.error('Axios Error:', error.message);
      setSubmitting(false);
      alert('Failed to add product. Please try again.');
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Add Product
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {Object.keys(product).map((key) => {
            if (key === 'prices') {
              return (
                <React.Fragment key={key}>
                  {product.prices.map((price, index) => (
                    <Grid container spacing={2} key={index} sx={{ ml: 'auto',mt: 1 }}>
                      <Grid item xs={4}>
                        <TextField
                          fullWidth
                          label="Wattage"
                          name="wattage"
                          value={price.wattage}
                          onChange={(e) => handlePriceChange(index, e)}
                          required
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          fullWidth
                          label="Price"
                          name="price"
                          value={price.price}
                          onChange={(e) => handlePriceChange(index, e)}
                          required
                        />
                      </Grid>
                      <Grid item xs={2} container alignItems="center" justifyContent="center">
                        <IconButton onClick={() => removePriceField(index)} disabled={product.prices.length === 1}>
                          <RemoveIcon />
                        </IconButton>
                        <IconButton onClick={addPriceField}>
                          <AddIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  ))}
                </React.Fragment>
              );
            } else {
              return (
                <Grid item xs={12} key={key}>
                  <TextField
                    fullWidth
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    name={key}
                    value={product[key]}
                    onChange={handleChange}
                    required
                  />
                </Grid>
              );
            }
          })}
        </Grid>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" type="submit" disabled={submitting}>
            {submitting ? 'Adding...' : 'Add Product'}
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default AddProducts;
