import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {sendMessage} from '../../store/actions/messageActions';

const InputMessage = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {