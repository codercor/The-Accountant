import React, { useState } from "react";
import axios from 'axios';
import { saveAs } from 'file-saver';
import './App.css';
import { Container, Grid, TextField, Stack, Button } from '@mui/material'
import Appbar from './components/Appbar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");

  const handleChange = (event) => this.setState({
    [event.target.name]: event.target.value
  })
  const createCustomer = () => {
    axios.post('/create-customer', this.state);
  }
  const getCustomer = () => {
    axios.get('/find-customers');
  }
  const deleteCustomer = () => {
    axios.delete('/delete-customer/' + this.state.uid);
  };

  return (
    <>
      <Appbar />
      <Container>
        <h1>Create Customer</h1>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12} >
            <Stack spacing={2}>
              <TextField variant="outlined" label="Name" />
              <TextField variant="outlined" label="Address" />
              <TextField variant="outlined" label="uid" />
              <TextField variant="outlined" label="Telefon" />
              <TextField variant="outlined" label="Email" />
              <Button variant="contained" startIcon={<AddCircleIcon />} >
                Hinzufügen </Button>
            </Stack>
          </Grid>
          <Grid item md={6} xs={12}>
            Sağ taraf
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

