import { Container, Stack, TextField, Grid, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToken,setUser } from '../store/slices/userSlice'
import axios from '../service/axios';
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const login = () => {
        if (username.length > 0 && password.length > 0) {
            axios.post('/auth/login', { username, password }).then(res => {
                alert(res.data.message);
                let token = res.data.token;
                let user = res.data.user;
                console.log(token);
                dispatch(setToken(token));
                console.log(user)
                dispatch(setUser(user))
                //route to panel
                navigate('/panel');
            }).catch(err => {
                alert("Invalid username or password");
            })
        }else{
            alert('Please fill all fields');
        }

    }
    return (
        <Container >
            <Grid container rowSpacing={3} mt={6} >
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <Typography variant="h4" >Login</Typography>
                </Grid>
                <Grid item md={3} />
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <TextField fullWidth value={username} onChange={(e) => setUsername(e.target.value)} label="Username" />
                </Grid>
                <Grid item md={3} />
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <TextField type="password" onKeyUp={(e) => e.key == 'Enter' && login()} fullWidth value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
                </Grid>
                <Grid item md={3} />
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <Button fullWidth onClick={() => login()} variant="contained" color="primary">Login</Button>
                </Grid>
                <Grid item md={3} />
            </Grid>
        </Container>
    )
}
