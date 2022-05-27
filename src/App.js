import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Message from "./Message";
import { Link } from "react-router-dom";

function App() {
  const [content, setContent] = useState(null);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  function handleUserName(event) {
    console.log(event.target.value);
    setUserName(event.target.value);
  }

  function handleMessage(event) {
    console.log(event.target.value);
    setMessage(event.target.value);
  }

  useEffect(() => {
    fetch("https://teniolao-cyf-chat-server.glitch.me/messages")
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <h1>CYF Chat</h1>
        <div>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/message">
            Posts
          </Link>
        </div>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div className="body-wrapper">
              <h2>Send a message</h2>
              {content && <p>{content[0].text}</p>}
              <form action="/message" method="post">
                {/* <p>{updateData}</p> */}
                <label>Name:</label>
                <input
                  type="text"
                  value={userName}
                  onChange={handleUserName}
                  placeholder="Your Name"
                  required
                />

                <label> Message:</label>
                <input
                  type="text"
                  value={message}
                  onChange={handleMessage}
                  placeholder="The message..."
                  required
                />
                <button>Send</button>
              </form>
            </div>
          }
        />
        <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
