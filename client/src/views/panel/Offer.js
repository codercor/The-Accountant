import React from 'react'
import OfferInputForm from '../../components/panel/offer/OfferInputForm'
import { Button, Container, Typography } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { createOffer, fetchOffers } from '../../store/slices/offerSlice'
import OffersTable from '../../components/panel/offer/OffersTable'
export default function Offser() {
    const newOffer = useSelector(state => state.offer.newOffer)
    const offers = useSelector(state => state.offer.offers)
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchOffers());
    }, [])
    return (
        <Container>
            <Typography variant="h4">Offer</Typography>
            <OfferInputForm/>
            <Button onClick={()=>{
                dispatch(createOffer(newOffer));
                dispatch(fetchOffers());
            }} sx={{marginTop:'10px'}} fullWidth variant="contained" color="warning">Create Offer</Button>
            <OffersTable offers={offers} />
        </Container>
    )
}
