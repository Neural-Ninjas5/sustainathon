import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './Components/SideBar.jsx';
import Dashboard from './Pages/Dashboard';
import AddProducts from './Pages/AddProducts';
import Orders from './Pages/Orders';
import ExistingProducts from './Pages/ExistingProducts';
import Reviews from './Pages/Reviews';
import Notifications from './Pages/Notifications';
import Settings from './Pages/Settings';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-products" element={<AddProducts />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/existing-products" element={<ExistingProducts />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
