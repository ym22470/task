import {configureStore} from '@reduxjs/toolkit'
import messageReducer from '../feature/message/messageSlice'
export default configureStore({
    reducer:{
        messages: messageReducer
    }
})