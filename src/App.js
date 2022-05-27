import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Message from "./Message";
import Navbar from "./Navbar";
import Form from "./Form";

function App() {
  const [content, setContent] = useState([]);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  function handleUserName(event) {
    setUserName(event.target.value);
  }

  function handleMessage(event) {
    setMessage(event.target.value);
  }

  useEffect(() => {
    fetch("https://teniolao-cyf-chat-server.glitch.me/messages")
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="body-wrapper">
              <h2>Send a message</h2>

              <Form
                userName={userName}
                handleUserName={handleUserName}
                message={message}
                handleMessage={handleMessage}
              />
            </div>
          }
        />
        <Route path="/message" element={<Message content={content} />} />
      </Routes>
    </div>
  );
}

export default App;
