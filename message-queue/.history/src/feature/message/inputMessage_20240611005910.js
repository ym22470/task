import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addMessage} from './messageSlice';
//ini
let nextMessageId = 0;
const InputMessage = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        if (message === '') return(
            alert('Please enter a message!')
        )
        e.preventDefault()
        //create the payload to store the message, id and timestamp so that we can remove the message after 5 seconds
        const payload = {
            id: nextMessageId++,
            text: message,
            timestamp: Date.now()
        }
        //dispath the action with the payload
        dispatch(addMessage(payload))
        //clear the input field
        setMessage('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">submit</button>
        </form>
    )
}

export default InputMessage;