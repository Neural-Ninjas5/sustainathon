import React from 'react';
import { useCart } from '../../context/cartContext';
import { Box, Typography, Grid } from '@mui/material';
import Header from "../../Components/Header/Header"

const Cart = () => {
    const { cart } = useCart();

    // Calculate total cost
    const totalCost = cart.reduce((total, product) => total + Number(product.price), 0);

    if (cart.length === 0) {
        return <Typography>Your cart is empty</Typography>;
    }

    return (<>
        <Header />
        <Box p={5} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" gutterBottom>
                Your Cart
            </Typography>
            <Box display="grid" gridTemplateColumns="2fr 1fr" gap={3} width="80%">
                <Box>
                    {cart.map((product, index) => (
                        <Box key={index} p={2} boxShadow={2} bgcolor="background.paper" borderRadius={4} mb={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={3}>
                                    <img src={product.imageSrc} alt={product.imageAlt} style={{ width: '100%', height: 'auto' }} />
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Typography variant="h6" gutterBottom>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Manufacturer: {product.manufacturer}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Price: ₹{product.price}
                                    </Typography>
                                    <Typography variant="body2">
                                        Description: {product.description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    ))}
                </Box>
                <Box alignSelf="start">
                    <Box p={2} boxShadow={2} bgcolor="background.paper" borderRadius={4}>
                        <Typography variant="h6">
                            Total Cost: ₹{totalCost}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
    );
};

export default Cart;
