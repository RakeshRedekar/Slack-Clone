import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ChatInput.css";
import db from "./firebase";
import firebase from "firebase/compat/app";
import { store } from "./store";

function ChatInput({ channelName, channelID }) {
  const [ip, setInput] = useState(null);
  const { user } = useSelector((store) => store);

  const sendMesssage = (e) => {
    e.preventDefault();

    if (channelID) {
      db.collection("rooms").doc(channelID).collection("messages").add({
        message: ip,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  };

  return (
    <div className="chatInput">
      <form onSubmit={sendMesssage}>
        <input type= "text" 
          value={ip} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder={`Message #${channelName?.toLowerCase()}`} />
        <button type="submit">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
