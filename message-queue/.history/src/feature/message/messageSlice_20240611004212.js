import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: [], 
    reducers: {
        addMessage: {
            reducer: (state, action) => {
                //push 
                state.push(action.payload);
            },
        },
        removeMessage: (state, action) => {
            const newState = state.filter(message => message.id !== action.payload);
            return newState;
        },
    },
});

export const { addMessage, removeMessage } = messagesSlice.actions;

export default messagesSlice.reducer;