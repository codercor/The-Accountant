import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../store/slices/userSlice'
import { Container, Grid, Typography, TextField, Button } from '@mui/material'
import axios from '../../service/axios'
import NavigationButtons from '../../components/panel/home/NavigationButtons'

export default function Home() {
    const dispatch = useDispatch()
    const links = [
        { title: "Customer", to: '/panel/customer', color: "primary" },
        { title: "Products", to: '/panel/products', color: "success" },
        { title: "Offer", to: '/panel/offer', color: "warning" },
        { title: "Contract Note", to: '/panel/contract-note', color: "info" },
        { title: "Invoice", to: '/panel/invoice', color: "secondary" },
        { title: "Todo", to: '/panel/todo', color: "error" },
    ];
    const user = useSelector(state => state.user.user)
    useEffect(() => {
        console.log(user)
    }, []);
    const [userData, setUserData] = useState({
        name: user.name,
        companyName: user.companyName,
        address: user.address,
        uid: user.uid,
        bankAccount: user.bankAccount,
        telefon: user.telefon,
        email: user.email
    });

    const updateUser = (e) => {
        //{userData}=> {userData:{name,companyName,address,uid,bankAccount,telefon,email}}
        //{...userData} => {name:name,companyName:companyName,address:address,uid:uid,bankAccount:bankAccount,telefon:telefon,email:email}
        axios.post('/user/update', { ...userData }).then(res => {
            alert(res.data.message)
        })
    }

    return (
        <Container sx={
            {
                paddingBottom: "50px",
            }
        }>
            <Grid container justifyContent="center" alignItems="center" rowSpacing={3} mt={1} mb={1} >
                <Grid item md={12} xs={12}>
                    <Typography variant="h4" >Home</Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} fullWidth label="Name" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField disabled value={user.username} fullWidth label="Username" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField value={userData.companyName} onChange={(e) => setUserData({ ...userData, companyName: e.target.value })} fullWidth label="Company Name" />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextField value={userData.address} onChange={(e) => setUserData({ ...userData, address: e.target.value })} fullWidth label="Address" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField value={userData.uid} onChange={(e) => setUserData({ ...userData, uid: e.target.value })} fullWidth label="UID" />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextField value={userData.bankAccount} onChange={(e) => setUserData({ ...userData, bankAccount: e.target.value })} fullWidth label="Bank Account" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField value={userData.telefon} onChange={(e) => setUserData({ ...userData, telefon: e.target.value })} fullWidth label="Telefon" />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextField value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} fullWidth label="Email" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Button variant="outlined" fullWidth onClick={() => {
                        updateUser();
                        // dispatch(setUser(userData)) 
                    }}>Save</Button>
                </Grid>

            </Grid>
            <NavigationButtons links={links} />
        </Container>
    )
}
