import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import CreateIcon from "@mui/icons-material/Create";
import Avatar from "@mui/material/Avatar";
import SidebarOption from "./SidebarOption";
import CommentIcon from "@mui/icons-material/Comment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import db from "./firebase";
import { useSelector } from "react-redux";
import { store } from "./store";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const { user } = useSelector((store) => store);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <div className="sidebarHeaderName">
          <h4>Newton School</h4>
          <div className="sidebarHeaderH6">
            <Brightness1Icon />
            <h6>{user?.displayName}</h6>
            <Avatar alt="Rakesh" src={user?.photoURL} />
          </div>
        </div>
        <CreateIcon />
      </div>
      <div className="firstSet">
        <SidebarOption Icon={CommentIcon} title={"Threads"} />
        <SidebarOption Icon={InboxIcon} title={"Mentions & reactions"} />
        <SidebarOption Icon={DraftsIcon} title={"Saved items"} />
        <SidebarOption Icon={BookmarkBorderIcon} title={"Channel browser"} />
        <SidebarOption Icon={PeopleAltIcon} title={"People & user groups"} />
        <SidebarOption Icon={AppsIcon} title={"Apps"} />
        <SidebarOption Icon={FileCopyIcon} title={"File browser"} />
        <SidebarOption Icon={ExpandLessIcon} title={"Show less"} />
      </div>
      <div className="secondSet">
        <SidebarOption Icon={ExpandMoreIcon} title={"Channels"} />
      </div>
      <div className="secondSet">
        <SidebarOption Icon={AddIcon} addChannelOption title={"Add Channels"} />
      </div>

      <div>
        {channels.map((channel, index) => (
          <SidebarOption
            key={channel.id}
            title={channel.name}
            id={channel.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
