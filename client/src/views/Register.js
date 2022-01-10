import { Container, Stack, TextField, Grid, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Register() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        confirmEmail: '',
        name: ''
    });
    const navigate = useNavigate();
    const register = () => {
        if((user.password != user.confirmPassword)||(user.email != user.confirmEmail)){
            alert("Passwords or emails do not match!");
        }else{
            fetch('http://localhost:3001/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
            .then(data => {
                if(data.username){
                    alert("Successfully registered");
                }else{
                    alert(data.message);
                    navigate('/login');
                }
            });
        }
    }
    return (
        <Container >
            <Grid container rowSpacing={3} mt={6} >
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <Typography variant="h4" >Register</Typography>
                </Grid>
                <Grid item md={3} />
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <TextField value={user.name} onChange={(e)=>{ 
                        setUser({...user, name: e.target.value})
                     }} fullWidth label="Name" />
                </Grid>
                <Grid item md={3} />
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <TextField
                    value={user.username}
                    onChange={(e)=>{
                        setUser({...user, username: e.target.value})
                    }}
                    fullWidth label="Username" />
                </Grid>
                <Grid item md={3} />
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <TextField
                    value={user.email}
                    onChange={(e)=>{
                        setUser({...user, email: e.target.value})
                    }}

                    fullWidth label="Email" />
                </Grid>
                <Grid item md={3} />
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <TextField
                    value={user.confirmEmail}
                    onChange={(e)=>{
                        setUser({...user, confirmEmail: e.target.value})
                    }}
                    fullWidth label="Email Confirm" />
                </Grid>
                <Grid item md={3} />
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <TextField
                    value={user.password}
                    onChange={(e)=>{
                        setUser({...user, password: e.target.value})
                    }}

                    fullWidth type="password" label="Password" />
                </Grid>
                <Grid item md={3} />
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <TextField 
                    value={user.confirmPassword}
                    onChange={(e)=>{
                        setUser({...user, confirmPassword: e.target.value})
                    }}
                    fullWidth type="password" label="Password Confirm" />
                </Grid>
                <Grid item md={3} />
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <Button onClick={()=>{register()}} fullWidth variant="contained" color="primary">Register</Button>
                </Grid>
                <Grid item md={3} />
            </Grid>
        </Container>
    )
}
