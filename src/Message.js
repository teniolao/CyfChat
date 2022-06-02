import React from "react";
//import { Link } from "react-router-dom";

function Message() {
  //const [content, setContent] = useState([]);

  // useEffect(() => {
  //   fetch("https://teniolao-cyf-chat-server.glitch.me/messages")
  //     .then((res) => res.json())
  //     .then((data) => setContent(data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="body-wrapper">
      <h2>Hello World</h2>
      <p>hello</p>
      {/* {content && <p>{content[0].text}</p>} */}
    </div>
  );
}

export default Message;
