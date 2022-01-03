import React from 'react'
import { Container, Grid,Typography } from '@mui/material'
export default function Footer() {
    return (
        <Container sx={
            {
                backgroundColor: "black",
                color: "white",
            }
        }>
            <Grid container >
                <Grid item xs={12}>
                    <Typography variant="overline">
                        The Accountant &copy; 2022 All Rights Reserved
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}
