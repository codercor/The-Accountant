import { Container, Stack, TextField, Grid, Typography, Button } from '@mui/material'
import React from 'react'

export default function Login() {
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
                    <TextField fullWidth label="Username" />
                </Grid>
                <Grid item md={3} />
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <TextField fullWidth label="Password" />
                </Grid>
                <Grid item md={3} />
                <Grid item md={3} />
                <Grid item md={6} xs={12}>
                    <Button fullWidth variant="contained" color="primary">Login</Button>
                </Grid>
                <Grid item md={3} />
            </Grid>
        </Container>
    )
}
