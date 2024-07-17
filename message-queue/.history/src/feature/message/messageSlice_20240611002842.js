import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: [], 
    reducers: {
        addMessage: {
            reducer: (state, action) => {
                state.push(action.payload);
                console.log(state)
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