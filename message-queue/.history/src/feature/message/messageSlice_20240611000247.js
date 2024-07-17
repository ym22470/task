import {createSlice} from '@reduxjs/toolkit'

export const messageSlice = createSlice({

    name: 'messages',
    initialState: [],
    reducers:{
        addMessage: (state, action) => {
            state.push(action.payload);
        },
        removeMessage: (state, action) => {
            console.log('State before filter:', state);
            state.messages = state.messages.filter((msg) => msg.id !== action.payload)
            console.log('State before filter:', state.payload);
            //return the array that contains all the elements that is not equal to the action.payload
        }
    }
})

export const {addMessage, removeMessage} = messageSlice.actions

//export const selectMessage = (state) => state.message.message

export default messageSlice.reducer