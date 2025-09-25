import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {
    const {targetUserId} = useParams()
    console.log(targetUserId);
    const [messages, setMessages] = useState([{text: "Hello World"}, {text: "Hello World 2"}])
    
  return (
    <div className='flex flex-col w-1/2 mx-auto border border-gray-100 rounded-lg m-5 h-[75vh]'>
      <h1 className='p-5 border-b border-gray-100'>Chat</h1>

      <div className='flex-1 overflow-scroll p-5'>
        {/* Display Message */}
        {messages.map((msg,index)=>{
          return(
            <>
            <div key={index} className="chat chat-start">
              <div className="chat-bubble">
                It's over Anakin,
                <br />
                I have the high ground.
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble">You underestimate my power!</div>
            </div>
            </>
          )
        })}
      </div>

      <div className='p-5 border-t border-gray-100 flex items-center gap-2'>
        <input placeholder='Type here...' className='bg-black text-white flex-1 border-gray-100 p-2 rounded-lg'/>
        <button className='btn-secondary btn'>Send</button>
      </div>
    </div>
  )
}

export default Chat
