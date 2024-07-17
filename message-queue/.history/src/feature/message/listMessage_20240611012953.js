import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeMessage} from './messageSlice';
import '../.././App.css';

const MessageList = () => {
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();
//useEffect hook to remove the message after 5 seconds
    useEffect(() => {
        const timers = messages.map(message =>
            setTimeout(() => {
                dispatch(removeMessage(message.id));
            }, 5000)
        );

        return () => timers.forEach(timer => clearTimeout(timer));
    }, [messages, dispatch]);

    return (
        <ul>
            {messages.map(message => (
            
                    <li key={message.id}>
                        {message.text}
                     </li>
                </div>
            ))}
        </ul>
    );
};

export default MessageList;
