import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        newCustomer: {
            name: '',
            companyName: '',
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
                name: '',
                companyName: '',
                address: '',
                uid: '',
                telefon: '',
                email: ''
            };
            //window.location.href = '/login';
            console.log("clearCustomer");
        },
    }
})

export const {  setCustomer, clearCustomer,setNewCustomer } = customerSlice.actions

export default customerSlice.reducer