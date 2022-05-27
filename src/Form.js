import React from "react";

function Form({ userName, handleUserName, message, handleMessage }) {
  return (
    <form action="/message" method="post">
      <label>Name:</label>
      <input
        type="text"
        value={userName}
        onChange={handleUserName}
        placeholder="Your Name"
        required
      />

      <label> Message:</label>
      <textarea
        type="text"
        value={message}
        onChange={handleMessage}
        placeholder="Your message..."
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
}

export default Form;
