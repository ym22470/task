import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from './messagesSlice';

const MessageInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (text.trim()) {
            dispatch(addMessage(text));
            setText('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your message"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default MessageInput;
