import React from "react";
import { useNavigate } from "react-router";
import db from "./firebase";

import "./SidebarOptions.css";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const navigate = useNavigate();

  const selectChannel = () => {
    if (id) {
      navigate(`${id}`);
    } else {
      navigate(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter Channel Name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon ? <Icon className="sidebarOptionIcon" /> : "#"}
      {title ? <h4>{title}</h4> : "Provide title"}
    </div>
  );
}

export default SidebarOption;
