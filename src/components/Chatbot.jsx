import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
  
  ]);

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

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
        <form className="mt-6 flex" onSubmit={handleSendMessage}>
          <input
            type="text"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Type a message..."
            value={input}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
