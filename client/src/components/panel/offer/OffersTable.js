import React from 'react'

import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { PictureAsPdf as PDF } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { generateOfferPDF } from '../../../store/slices/offerSlice';

export default function OffersTable({ offers }) {
    const dispatch = useDispatch();
    return (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Company Name</TableCell>
                    <TableCell>Person Name</TableCell>
                    <TableCell>Products</TableCell>
                    <TableCell>Products Number</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {offers.map((offer) => (
                    <TableRow
                        key={offer._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {offer.customer.companyName}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {offer.customer.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            ----
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {offer.products.length}
                        </TableCell>
                        <TableCell>
                            <IconButton onClick={
                                () => {
                                    console.log("HEY HEY HEY")
                                    dispatch(generateOfferPDF(offer._id));
                                }
                            } sx={
                                {
                                    color: '#cf421f',
                                }
                            } >
                                <PDF sx={
                                    {
                                        fontSize: '35px'
                                    }
                                } />
                            </IconButton>

                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
