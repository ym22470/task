import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addMessage} from './messageSlice';

const InputMessage = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    let nextMessageId = 0;

    const handleSubmit = (e) => {
        e.preventDefault()
        //dispath the action 
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