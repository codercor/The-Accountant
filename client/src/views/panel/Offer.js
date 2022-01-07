import React from 'react'
import OfferInputForm from '../../components/panel/offer/OfferInputForm'
import { Button, Container, Typography } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { createOffer } from '../../store/slices/offerSlice'
export default function Offser() {
    const newOffer = useSelector(state => state.offer.newOffer)
    const dispatch = useDispatch();
    return (
        <Container>
            <Typography variant="h4">Offer</Typography>
            <OfferInputForm/>
            <Button onClick={()=>{
                dispatch(createOffer(newOffer));
            }} sx={{marginTop:'10px'}} fullWidth variant="contained" color="warning">Create Offer</Button>
        </Container>
    )
}
