import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'access',
    initialState: {
        signIn: false,
        signUp: false,
    },
    reducers: {
        setSignIn: (state, action) => {
            state.signIn = action.payload;
        },
        setSignUp: (state, action) => {
            state.signUp = action.payload;
        }
    }
});