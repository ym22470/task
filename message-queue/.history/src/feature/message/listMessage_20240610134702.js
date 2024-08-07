// src/features/messages/MessageList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMessage } from './messageSlice';

const MessageList = () => {
    const messages = useSelector((state) => state.messages);
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
        <div>
            <h1>Hello</h1>
            {messages.map((message) => (
                <div key={message.id} className="message">
                    {message.text}
                </div>
            ))}
        </div>
    );
};

export default MessageList;
