import AppBar from './components/Appbar';
import React from 'react'
import CreateCustomer from './views/CreateCustomer'
import Login from './views/Login'
import Register from './views/Register';
import { Route, Routes } from 'react-router-dom';


//panel routes
import Home from './views/panel/Home';
const Panel = {Home}
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
          <Route path="add-customer" element={<h1>customers</h1>} />
          <Route path="add-product" element={<h1>products</h1>} />
          <Route path="todo" element={<h1>todo</h1>} />
        </Route> 
      </Routes>
    </>
  )
}
