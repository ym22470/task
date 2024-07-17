import {createSlice} from '@reduxjs/toolkit'

export const messageSlice = createSlice({

    name: 'messages',
    initialState: [],
    reducers:{
        addMessage: (state, action) => {
            //console.log('State before push:', state);
            state.push(action.payload);
            console.log('State after push:', state);
        },
        removeMessage: (state, action) => {
            state.message = state.message.filter((msg) => msg.id !== action.payload)
            //return the array that contains all the elements that is not equal to the action.payload
        }
    }
})

export const {addMessage, removeMessage} = messageSlice.actions

//export const selectMessage = (state) => state.message.message

export default messageSlice.reducer