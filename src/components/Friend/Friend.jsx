import React from 'react';
import './Friend.css';

export default function Friend({username, profilePicture}) {
  return (
    <li className="sidebarFriend">
      <img className='sidebarFriendImage' src={profilePicture} alt="" />
      <span className="sidebarFriendName">{username}</span>
    </li>
  )
}
