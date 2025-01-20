import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, CircularProgress, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  tableContainer: {
    margin: '20px auto',
    maxWidth: 1000,
    overflowX: 'auto',
  },
  actionButton: {
    marginRight: 5,
  },
  snackbar: {
    position: 'fixed',
    bottom: 10,
    right: 10,
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    borderRadius: 4,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  snackbarShow: {
    opacity: 1,
  },
});

function ExistingProducts() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  };

  const navigate = useNavigate();

//   const handleUpdate = async (productId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/products/${productId}`);
//       if (response.status === 200) {
//         // Navigate programmatically
//         navigate(`/update/${productId}`);
//       } else {
//         console.error('Failed to fetch product for update');
//         setSnackbarMessage('Failed to fetch product for update');
//         setSnackbarOpen(true);
//       }
//     } catch (error) {
//       console.error('Error fetching product for update:', error);
//       setSnackbarMessage('Failed to fetch product for update');
//       setSnackbarOpen(true);
//     }
//   };
    const handleUpdate = (productId) => {
    navigate(`/update/${productId}`);
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/products/${productId}`);
      if (response.status === 200) {
        setProducts(products.filter((product) => product._id !== productId));
        setSnackbarMessage('Product deleted successfully');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      setSnackbarMessage('Failed to delete product');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div className={classes.tableContainer}>
      <TableContainer component={Paper}>
        <Table aria-label="Product table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Manufacturer</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.manufacturer}</TableCell>
                <TableCell>₹{product.price}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.actionButton}
                    onClick={() => handleUpdate(product._id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.actionButton}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        ContentProps={{
          classes: {
            root: classes.snackbar,
            message: classes.snackbar,
          },
        }}
      />
    </div>
  );
}

export default ExistingProducts;
