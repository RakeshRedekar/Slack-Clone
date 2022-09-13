import React, { useEffect, useState } from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { store } from "./store";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useSelector((store) => store);

  return (
    <div className="header">
      <div className="headerLeft">
        <AccessTimeIcon />
      </div>
      <div className="headerSearch">
        <SearchIcon />
        <input value="" type="text" placeholder="Search here" />
      </div>
      <div className="headerRight">
        <HelpOutlineIcon />
        <Avatar
          className="headerAvatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
      </div>
    </div>
  );
}

export default Header;
