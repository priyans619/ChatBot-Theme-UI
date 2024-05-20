import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
  
  ]);

  const [input, setInput] = useState("");

 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="">
          <h2 className="text-2xl font-bold mb-6">Wysa Chatbot</h2>
          <div className="space-y-6 ">
            {messages.map((message, index) => (
              <div
                key={index}
                className="inline-block px-5 py-4 bg-indigo-100 rounded-lg"
                style={{ maxWidth: "100%", wordWrap: "break-word" }}
              >
                {message}
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Chatbot;
