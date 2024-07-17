import { createSlice } from '@reduxjs/toolkit';

//let nextMessageId = 0;

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: [], // This should be an empty array
    reducers: {
        addMessage: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            // prepare: (text) => {
            //     return { payload: { id: nextMessageId++, text, timestamp: Date.now() } };
            // },
        },
        removeMessage: (state, action) => {
            console.log('State before filter:', state);
            const newState = state.filter(message => message.id !== action.payload);
            console.log('State after filter:', newState);
            return newState;
        },
    },
});

export const { addMessage, removeMessage } = messagesSlice.actions;

export default messagesSlice.reducer;