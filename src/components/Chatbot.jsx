import React, { useState, useEffect } from "react";
import { useTheme } from "./Theme";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    "Hi there!",
    "I'm Wysa - an AI chatbot built by therapists.",
    "I'm here to understand your concerns and connect you with the best resources available to support you.",
    "How can I help you?"
  ]);

  const [input, setInput] = useState("");
  const { theme, cycleTheme } = useTheme();
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (!initialLoad) {
      document.body.style.background = "";
    }
  }, [theme, initialLoad]);

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

  const handleThemeChange = () => {
    setInitialLoad(false);
    cycleTheme();
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${
        initialLoad ? "" : theme.background
      }`}
      style={
        initialLoad
          ? { background: "linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)" }
          : {}
      }
    >
      <div className="max-w-md w-full space-y-8">
        <div className="">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`inline-block px-5 py-4 bg-white ${theme.bubble} rounded-lg`}
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
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </form>
        <button
          onClick={handleThemeChange}
          className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
