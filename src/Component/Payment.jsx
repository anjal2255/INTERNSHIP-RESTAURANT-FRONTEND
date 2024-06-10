import React, { useState } from 'react';
import DownloadDoneOutlinedIcon from '@mui/icons-material/DownloadDoneOutlined';
import { IconButton, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Placed = () => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleOrderButtonClick = () => {
    // Here you can place the logic to confirm the order
    // For demonstration purposes, we'll just set orderConfirmed to true
    setOrderConfirmed(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '210px' }}>
      {orderConfirmed ? (
        <>
          <h2>Order Confirmed!</h2>
          <p>Your order has been successfully placed.</p>
          <IconButton size="large">
          <Link to={'/Home'} style={{ textDecoration: 'none', color: 'black' }}>

            <DownloadDoneOutlinedIcon />
            </Link>
          </IconButton>
        </>
      ) : (
        <>
          <h2>Confirm Your Order</h2>
          <Button variant="contained" color="primary" onClick={handleOrderButtonClick}>
            Confirm Order
          </Button>
        </>
      )}
    </div>
  );
};

export default Placed;