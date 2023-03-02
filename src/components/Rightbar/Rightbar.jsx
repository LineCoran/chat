import './Rightbar.css'
import { Users } from '../../dummyData';
import OnlineUser from '../OnlineUser/OnlineUser';

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className="birthdayContainer">
          <img className='birthdayIcon' src="assets/gift.png" alt="" />
          <span className='birthdayText'>
              <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
            </span>
        </div>
        <img className='rightbarAd' src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          {
            Users.map((user) =>
            <OnlineUser
              key={user.id}
              username={user.username}
              profilePicture={user.profilePicture}
            />)
          }
        </ul>
      </div>
    </div>
  )
}
