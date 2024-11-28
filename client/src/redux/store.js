import { configureStore } from '@reduxjs/toolkit';
import postSlice from '../slices/postSlice';
import accessSlice from '../slices/accessSlice';

const store = configureStore({
    reducer: {
        // auth: authSlice.reducer,
        access: accessSlice.reducer,
        post:   postSlice.reducer,
    },
});
export default store;