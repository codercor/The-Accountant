import AppBar from './components/Appbar';
import React from 'react'
import CreateCustomer from './views/CreateCustomer'
import Login from './views/Login'
import Register from './views/Register';
import { Route, Routes } from 'react-router-dom';


//panel routes
import Home from './views/panel/Home';
import Customer from './views/panel/Customer';
const Panel = {Home,Customer}
export default function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<CreateCustomer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/panel">
          <Route index element={<Panel.Home/>} />
          <Route path="customer" element={<Panel.Customer/>} />
        </Route> 
      </Routes>
    </>
  )
}
