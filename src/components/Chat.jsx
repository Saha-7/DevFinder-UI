import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Chat = () => {

  const location = useLocation()

  const { targetUserId } = useParams();
  console.log(targetUserId);

  // Receving end user
  const ChatUser = location.state?.user
  console.log(ChatUser);
  const [messages, setMessages] = useState([
    { text: "Hello World" },
    { text: "Hello World 2" },
  ]);

  return (
    <div className="flex flex-col w-1/2 mx-auto border border-gray-100 rounded-lg m-5 h-[75vh]">
      <h1 className="p-5 border-b border-gray-100">Chat</h1>

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
        <input
          placeholder="Type here..."
          className="bg-black text-white flex-1 border-gray-100 p-2 rounded-lg"
        />
        <button className="btn-secondary btn">Send</button>
      </div>
    </div>
  );
};

export default Chat;
