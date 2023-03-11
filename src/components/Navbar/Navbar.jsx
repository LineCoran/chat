import { Link } from "react-router-dom";
import "./Navbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { IconButton } from "@mui/material";

import React, { useContext } from 'react'
import { Search } from "@mui/icons-material";
import { AuthContext } from "../../context/authContext";

export default function Navbar() {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to={"/"}>
          <span className="topBarLogo">LineSocial</span>
        </Link>

        <Link to={"/"}>
          <IconButton>
            <HomeOutlinedIcon />
          </IconButton>
        </Link>

        <IconButton>
          <DarkModeOutlinedIcon />
        </IconButton>
        
        <IconButton>
          <GridViewOutlinedIcon />
        </IconButton>
      </div>

      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchBarIcon" />
          <input placeholder="Search..." className="searchInput" />
        </div>
      </div>

      <div className="topBarRight">
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <IconButton>
              <EmailOutlinedIcon />
            </IconButton>
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
            <span className="topBarIconBadge">4</span>
          </div>
        </div>
        <Link to={`/profile/${currentUser.id}`}>
          <img src={currentUser.profilePic} alt="" className="topBarImage" />
        </Link>
      </div>
    </div>
  )
}
