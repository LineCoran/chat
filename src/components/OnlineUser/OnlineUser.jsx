import './OnlineUser.css';

export default function OnlineUser({username, profilePicture}) {
  return (
    <li className="rightbarFiend">
        <div className="rightbarProfileImageContainer">
            <img src={profilePicture} alt="" className="rightbarProfileImage" />
          <span className="rightbarOnline"></span>
        </div>
      <span className="rightbarUserName">{username}</span>
    </li>
  )
}
