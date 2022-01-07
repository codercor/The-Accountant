import { Select, MenuItem, InputLabel, Box, Grid, Typography, Divider, List, ListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomers } from '../../../store/slices/customerSlice';
import { setNewOffer } from '../../../store/slices/offerSlice';
import OfferSummaryTableProductListItem from './OfferSummaryTableProductListItem';

export default function OfferSummaryTable() {
    const newOffer = useSelector(state => state.offer.newOffer);
    const customers = useSelector(state => state.customer.customers);
    const products = useSelector(state => state.product.products);
    const selectedCustomer = customers.find((customer) => customer.id == newOffer.customer._id)
    return (
        selectedCustomer ? <Grid container border="1px black solid" padding={2} mt={7}>
             <Grid item md={6}>
                <Box>
                    <Typography variant='h3'> {selectedCustomer.companyName} </Typography>
                    <Typography variant='h5'> {selectedCustomer.name} </Typography>
                    <Typography variant='overline'> {selectedCustomer.uid} </Typography>
                    <Typography> Email : {selectedCustomer.email} </Typography>
                    <Typography> Phone : {selectedCustomer.telefon} </Typography>
                    <Typography> Address : {selectedCustomer.address} </Typography>
                </Box>
            </Grid>
            <Grid item md={6}>
                <Typography variant='overline'>Products</Typography>
                <List dense>
                    {newOffer.products.map((product, index) => (
                        <OfferSummaryTableProductListItem key={index} product={products.find((_product)=> _product.id == product._id )} />
                    ))}
                </List>
            </Grid>

        </Grid> : <div></div>
    )
}
