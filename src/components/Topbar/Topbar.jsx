import { Link } from "react-router-dom";
import "./Topbar.css";

import React from 'react'
import { Person, Search, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to={"/"}>
          <span className="topBarLogo">LineSocial</span>
        </Link>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchBarIcon" />
          <input placeholder="Search for friends, post or any video..." className="searchInput" />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Homepage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">4</span>
          </div>
        </div>
        <Link to={"/profile"}>
          <img src="/assets/person/1.jpeg" alt="" className="topBarImage" />
        </Link>
      </div>
    </div>
  )
}
