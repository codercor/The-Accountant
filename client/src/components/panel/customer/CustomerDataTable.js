import { Container, Divider, Chip } from '@mui/material'
import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers } from '../../../store/slices/customerSlice'
export default function CustomerDataTable() {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customer.customers);
    useEffect(() => {
        dispatch(fetchCustomers());
    }, [])
    const columns = [
        { field: 'id', headerName: 'id', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'address', headerName: 'Address', width: 150 },
        { field: 'telefon', headerName: 'Telefon', width: 150 },
        { field: 'uid', headerName: 'UID', width: 150 }
    ];
    return (
        <Container sx={{  padding: "10px 0" }}>
            <Divider sx={{margin:"30px 0"}}>
                <Chip label="Customers Table" />
            </Divider>
            <Container style={{ height: 400, width: '100%' }}>
                <DataGrid rows={customers} columns={columns} />
            </Container>
        </Container>
    )
}
