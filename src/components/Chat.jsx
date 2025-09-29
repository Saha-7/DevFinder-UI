import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const location = useLocation();

  const { targetUserId } = useParams();
  console.log(targetUserId);

  // Receving end user
  const ChatUser = location.state?.user;
  console.log(ChatUser);
  const [messages, setMessages] = useState([{ text: "Hello World" }]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((state) => state.user);
  const userId = user._id;

  useEffect(() => {
    if (!userId) {
      return;
    }

    const socket = createSocketConnection();

    //As soon as page loaded, the socket connection is made & Emiting event to server
    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    //As soon as component unloads, disconnect the socket connection
    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  const sendMessage =()=>{
    const socket = createSocketConnection()
    socket.emit("sendMessage", {
      firstname: user.firstName,
      userId,
      targetUserId,
      text: newMessage
    })
  }

  return (
    <div className="flex flex-col w-1/2 mx-auto border border-gray-100 rounded-lg m-5 h-[75vh]">
      <div className="w-full flex items-center gap-3 border-b border-gray-200 px-4 py-2">
        {/* Profile Picture */}
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            alt="profile pic"
            src={ChatUser?.photoUrl}
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Name */}
        <div className="flex flex-col">
          <span className="font-medium text-white">
            {ChatUser?.firstName} {ChatUser?.lastName}
          </span>
          {/* optional: last seen like WhatsApp */}
          {/* <span className="text-xs text-gray-500">online</span> */}
        </div>
      </div>

      <div className="flex-1 overflow-scroll p-5">
        {/* Display Message */}
        {messages.map((msg, index) => {
          return (
            <>
              <div key={index} className="chat chat-start">
                <div className="chat-bubble">
                  It's over Anakin,
                  <br />I have the high ground.
                  <span className="align-sub text-[10px] opacity-50 ml-2">
                    12:46
                    <img
                      alt="double tick"
                      className="inline-block ml-1 w-3 h-3 align-sub invert hue-rotate-180"
                      src="https://img.icons8.com/ios-glyphs/30/double-tick--v1.png"
                    />
                  </span>
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble">
                  You underestimate my power!
                  <span className="align-sub text-[10px] opacity-50 ml-2">
                    12:46
                    <img
                      alt="double tick"
                      className="inline-block ml-1 w-3 h-3 align-sub invert hue-rotate-180"
                      src="https://img.icons8.com/ios-glyphs/30/double-tick--v1.png"
                    />
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="p-5 border-t border-gray-100 flex items-center gap-2">
        <input value={newMessage} onChange={(e)=> setNewMessage(e.target.value)}
          placeholder="Type here..."
          className="bg-black text-white flex-1 border-gray-100 p-2 rounded-lg"
        />
        <button onClick={sendMessage} className="btn-secondary btn">Send</button>
      </div>
    </div>
  );
};

export default Chat;
