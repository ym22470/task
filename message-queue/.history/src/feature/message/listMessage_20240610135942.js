import {useSelector} from 'react-redux';

const ListMessage = () => {
    const messages = useSelector(state => state.messages)
    return (
        <ul>
            {messages}
        </ul>
    )
}

export default ListMessage;