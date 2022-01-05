import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import userSlice from './slices/userSlice';
import customerSlice from './slices/customerSlice';
import todoSlice from './slices/todoSlice';

const reducers = combineReducers({
    user: userSlice,
    customer: customerSlice,
    todo: todoSlice,
});


const persistedReducer = persistReducer({
    key: 'root',
    storage,
    whitelist: ['user']
}, reducers);
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export default store;