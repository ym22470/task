import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeMessage} from './messageSlice';
import '../.././App.css';

const MessageList = () => {
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();
//useEffect hook to remove the message after 5 seconds
//called after the messages
    useEffect(() => {
        //map through the messages array and set a timer for each message
        const timers = messages.map(message =>
            setTimeout(() => {
                dispatch(removeMessage(message.id));
            }, 5000)
        );
        //clear the timers when the component is unmounted, preventing memory leaks
        return () => timers.forEach(timer => clearTimeout(timer));
    }, [messages, dispatch]);

    return (
        <ul>
            {messages.map(message => (
                <li key={message.id} className='box'>
                    {message.text}
                 </li>
            ))}
        </ul>
    );
};

export default MessageList;
