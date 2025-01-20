import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api-helper/apiProduct';
import { Box, Typography } from '@mui/material';
import ProductName from './ProductName';
import Header from '../../Components/Header/Header';


const Marketplace = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
        <Box padding={5} margin="auto">
          <Typography variant='h4' textAlign={'center'}>Solar Panels</Typography>
        </Box>
        <Box display="flex" justifyContent={"center"} flexWrap="wrap">
          {products && products.map((product, index) => (
            <ProductName
              id={product._id}
              name={product.name}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              price={product.price}
              key={index}
              manufacturer={product.manufacturer}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Marketplace;
