import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import messageSlice, { removeMessage } from './messageSlice';

const ListMessage = () => {
    const messages = useSelector(state => state.messages)
    return (
        <ul>
            {messageSlice}
        </ul>
    )
}

export default ListMessage;