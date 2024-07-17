import {createSlice} from '@reduxjs/toolkit'

export const messageSlice = createSlice({

    name: 'message',
    initialState: {
        message: []
    },
    reducers:{
        addMessage: (state, action) => {
    }