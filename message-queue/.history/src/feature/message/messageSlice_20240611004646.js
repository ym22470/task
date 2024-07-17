import { createSlice } from '@reduxjs/toolkit';

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: [], 
    reducers: {
        addMessage: {
            reducer: (state, action) => {
                //push the message to the state array after the action is dispatched(being invoked by the dispatch function)
                state.push(action.payload);
            },
        },
        removeMessage: (state, action) => {
            const newState = state.filter(message => message.id !== action.payload);
            return newState;
        },
    },
});
//epxort the redu action creators
export const { addMessage, removeMessage } = messagesSlice.actions;

export default messagesSlice.reducer;