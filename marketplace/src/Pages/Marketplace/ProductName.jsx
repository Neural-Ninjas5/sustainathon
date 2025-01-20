import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductName = ({ name, imageSrc, imageAlt, price, manufacturer, id }) => {
  const productUrl = `/products/${id}`;

  return (

    <Link to={productUrl} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          margin: 2,
          width: 300,
          height: '100%',
          borderRadius: 4,
          boxShadow: "10px 10px 20px #ccc",
          transition: "box-shadow 0.3s ease",
          ":hover": {
            boxShadow: "10px 10px 30px #ccc",
          }
        }}
      >
        <CardActionArea>
          <img
            style={{ maxHeight: '50%', objectFit: 'cover' }}
            width="100%"
            src={imageSrc}
            alt={imageAlt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography>
              {manufacturer}
            </Typography>
            <Typography size="small" color="primary">
              ₹{price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default ProductName;
