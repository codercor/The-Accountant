import { Container, Grid, TextField, Button, Typography } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../service/axios'
import { setNewCustomer } from '../../store/slices/customerSlice'

export default function Customer() {
    const customer = useSelector(state => state.customer.newCustomer)
    useEffect(() => {
        console.log(customer)
    }, []);
    const [customerData, setUserData] = useState({
        name: customer.name,
        companyName: customer.companyName,
        address: customer.address,
        uid: customer.uid,
        telefon: customer.telefon,
        email: customer.email
    });
    const dispatch = useDispatch();
    const createCustomer = (e) => {
        //{customerData}=> {customerData:{name,companyName,address,uid,bankAccount,telefon,email}}
        //{...customerData} => {name:name,companyName:companyName,address:address,uid:uid,bankAccount:bankAccount,telefon:telefon,email:email}
        // axios.post('/customer/create', { ...customerData }).then(res => {
        //     alert(res.data.message)
        // })
        dispatch(setNewCustomer(customerData));
        console.log("Create CUSTOMER",customer);
    }
    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center" rowSpacing={3} mt={1} >
                <Grid item md={12} xs={12}>
                    <Typography variant="h4" >Home</Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField value={customerData.name} onChange={(e) => setUserData({ ...customerData, name: e.target.value })} fullWidth label="Name" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField value={customerData.companyName} onChange={(e) => setUserData({ ...customerData, companyName: e.target.value })} fullWidth label="Company Name" />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextField value={customerData.address} onChange={(e) => setUserData({ ...customerData, address: e.target.value })} fullWidth label="Address" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField value={customerData.uid} onChange={(e) => setUserData({ ...customerData, uid: e.target.value })} fullWidth label="UID" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField value={customerData.telefon} onChange={(e) => setUserData({ ...customerData, telefon: e.target.value })} fullWidth label="Telefon" />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextField value={customerData.email} onChange={(e) => setUserData({ ...customerData, email: e.target.value })} fullWidth label="Email" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Button variant="outlined" fullWidth onClick={() => {
                        createCustomer();
                        // dispatch(setUser(customerData)) 
                    }}>Save</Button>
                </Grid>

            </Grid>
        </Container>
    )
}
