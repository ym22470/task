import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addMessage} from './messageSlice.js';

const InputMessage = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        //dispath the action with a payload which is the message
        dispatch(addMessage(message))
        setMessage('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Send</button>
        </form>
    )
}

export default InputMessage;