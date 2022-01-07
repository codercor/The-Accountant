import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import axios from '../../service/axios'
export const fetchOffers = createAsyncThunk('offer/fetchOffers', async () => {
    let offers = await axios.get('/offer')
    return offers.data;
})


export const createOffer = createAsyncThunk('offer/createOffer', async (offer) => {
    let newOffer = await axios.post('/offer', offer)
    return newOffer;
});

export const offerSlice = createSlice({
    name: 'offer',
    initialState: {
        newOffer: {
            customer:{}, // { _id:'adadadd' }
            products:[], // [ { _id:'adadadd' }, { _id:'adadadd' } ]
        },
        offers: [],
    },
    reducers: {
        setNewOffer: (state, action) => {
            state.newOffer = action.payload;
        },
        setOffers: (state, action) => {
            state.offers = action.payload;
        },
        clearNewOffer: (state) => {
            state.newOffer = {
                customer:{},
                products:[],
            };
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchOffers.fulfilled, (state, action) => {
            state.offers = action.payload;
        });
        builder.addCase(createOffer.fulfilled, (state, action) => {
            console.log("Eklendi");
        });
    }
})

export const { setOffers, clearNewOffer, setNewOffer } = offerSlice.actions

export default offerSlice.reducer