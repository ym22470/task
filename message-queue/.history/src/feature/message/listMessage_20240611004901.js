import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeMessage} from './messageSlice';

const MessageList = () => {
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();

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
                key={message.id}>
                    {message.text}
            
            ))}
        </ul>
    );
};

export default MessageList;
