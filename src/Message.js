import React from "react";
//import { Link } from "react-router-dom";

function Message({ content }) {
  return (
    <div className="body-wrapper">
      {/* <Link className="link back-btn" to="/">
        Go back
      </Link> */}
      <h2>Hello World</h2>
      {content && <p>{content[0].text}</p>}
    </div>
  );
}

export default Message;
