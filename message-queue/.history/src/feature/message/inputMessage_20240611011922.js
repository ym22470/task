import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addMessage} from './messageSlice';
//initialize the message id
let nextMessageId = 0;
const InputMessage = () => {
    //use the useState hook to store the message
    //state management for the input field
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        //prevent the default form submission
        e.preventDefault()
        //to check if the input field is empty
        if (message === '') return(
            alert('Please enter a message!')
        )
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
            {/* make sure that the changes can be displayed in the textbox */}
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">submit</button>
        </form>
    )
}

export default InputMessage;