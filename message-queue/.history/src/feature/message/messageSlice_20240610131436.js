import {createSlice} from '@reduxjs/toolkit'

export const messageSlice = createSlice({

    name: 'message',
    initialState: {
        message: []
    },
    reducers:{
        addMessage: (state, action) => {
            state.message.push(action.payload)
        },
        removeMessage: (state, action) => {
            state.message = state.message.filter((msg) => msg.id !== action.payload)
        }
    }
})