import {useSelector} from 'react-redux';

const ListMessage = () => {
    const messages = useSelector(state => state.messages)
    return (
        <ul>
            {messages.map((message, index) => (
                <li key={index}>{message}</li>
            ))}
        </ul>
    )
}