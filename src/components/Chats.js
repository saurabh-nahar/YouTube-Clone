import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LiveChatMsg from './LiveChatMsg'
import generateRandomNameAndMessage from '../constants/generateRandomNameAndMessage'
import { addChat } from '../utils/chatsSlice'


const Chats = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(()=> {
        const interval = setInterval(()=> {
            dispatch(addChat(generateRandomNameAndMessage()));
        }, 1500)

        return () => clearInterval(interval)
        },[dispatch])


  return (
    <div>
        {chatMessages.map((c, index) => <LiveChatMsg key ={index} data = {c}/>)}    
    </div>
  )
}

export default Chats;