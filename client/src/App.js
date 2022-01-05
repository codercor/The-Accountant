import AppBar from './components/Appbar';
import React from 'react'
import CreateCustomer from './views/CreateCustomer'
import Login from './views/Login'
import Register from './views/Register';
import { Route, Routes } from 'react-router-dom';

import {Box} from '@mui/material'
//panel routes
import Home from './views/panel/Home';
import Customer from './views/panel/Customer';
import Todo from './views/panel/Todo';
import Product from './views/panel/Product';

import Footer from './components/panel/common/Footer';

const Panel = {Home,Customer,Todo,Product}
export default function App() {
  return (
    <Box >
      <AppBar />
      <Routes>
        <Route path="/" element={<CreateCustomer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/panel">
          <Route index element={<Panel.Home/>} />
          <Route path="customer" element={<Panel.Customer/>} />
          <Route path="todo" element={<Panel.Todo/>} />
          <Route path="product" element={<Panel.Product/>} />
        </Route> 
      </Routes>

    </Box>
  )
}
