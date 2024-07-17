import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {sendMessage} from '../../store/actions/messageActions';

export default const InputMessage = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(sendMessage(message))
        setMessage('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit">Send</button>
        </form>
    )
}

