import AppBar from './components/Appbar';
import React from 'react'
import CreateCustomer from './views/CreateCustomer'
import Login from './views/Login'
import Register from './views/Register';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<CreateCustomer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}
