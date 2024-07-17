import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMessage } from './messageSlice';

const ListMessage = () => {
    const messages = useSelector(state => state.messages)
    return (
        <ul>
            {messages.map((message) => (
                <div>
                    {message.text}
                </div>
            ))}
        </ul>
    )
}

export default ListMessage;