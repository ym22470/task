import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addMessage} from './messageSlice';
import store from '../../app/store';

let nextMessageId = 0;
const InputMessage = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const payload = {
            id: nextMessageId++,
            text: message,
            timestamp: Date.now()
        }
        //dispath the action with the payload
        dispatch(addMessage(payload))
        console.log(store.getState())
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