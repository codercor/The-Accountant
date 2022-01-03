import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import axios from '../../service/axios'
export const fetchCustomers = createAsyncThunk('customer/fetchCustomers', async () => {
    let customers = await axios.get('/customer')
    return customers.data.map(customer => ({
        id: customer._id,
        name: customer.name,
        address: customer.address,
        uid: customer.uid,
        telefon: customer.telefon,
        email: customer.email
    }))
})

export const createCustomer = createAsyncThunk('customer/createCustomer', async (customer) => {
    let newCustomer = await axios.post('/customer', customer)
    return {
        id: newCustomer.data._id,
        name: newCustomer.data.name,
        address: newCustomer.data.address,
        uid: newCustomer.data.uid,
        telefon: newCustomer.data.telefon,
        email: newCustomer.data.email
    }
});

export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        newCustomer: {
            id: '',
            name: '',
            address: '',
            uid: '',
            telefon: '',
            email: ''
        },
        customers: [],
    },
    reducers: {
        setNewCustomer: (state, action) => {
            state.newCustomer = action.payload;
        },
        setCustomers: (state, action) => {
            state.customers = action.payload;
        },
        clearNewCustomer: (state) => {
            state.token = '';
            state.newCustomer = {
                id: '',
                name: '',
                address: '',
                uid: '',
                telefon: '',
                email: ''
            };
            //window.location.href = '/login';
            console.log("clearCustomer");
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchCustomers.fulfilled, (state, action) => {
            state.customers = action.payload;
        });
        builder.addCase(createCustomer.fulfilled, (state, action) => {
            state.customers.push(action.payload);
        })
    }
})

export const { setCustomers, clearNewCustomer, setNewCustomer } = customerSlice.actions

export default customerSlice.reducer