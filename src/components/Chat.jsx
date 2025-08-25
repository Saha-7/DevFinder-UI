import React from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {
    const {targetUserId} = useParams()
    console.log(targetUserId);
    
  return (
    <div>
      
    </div>
  )
}

export default Chat
