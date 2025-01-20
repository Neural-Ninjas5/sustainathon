import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Marketplace from './Pages/Marketplace/Marketplace';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Login from './Pages/Login/Login';
import Checkout from './Pages/Checkout/Checkout';
import Cart from './Pages/Cart/Cart';
import AddLocationComponent from './Components/AddLocation/AddLocationComponent';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/cartContext';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/marketplace', element: <Marketplace /> },
  { path: '/products/:id', element: <ProductDetails /> },
  { path: '/login', element: <Login /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/calculation', element: <AddLocationComponent /> },
  { path: '/cart', element: <Cart /> }
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
