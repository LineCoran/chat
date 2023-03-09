import './Rightbar.css'
import { Users } from '../../dummyData';
import OnlineUser from '../OnlineUser/OnlineUser';

export default function Rightbar({ profile }) {

  const HomeRightBar = () => {
    return (
      <>
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
      </>
    )
  }

    const ProfileRightBar = () => {
    return (
      <>
        <h4 className='rightBarTitle'>User information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValues">New York</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightbarInfoKey">Rrom: </span>
            <span className="rightbarInfoValues">Madrid</span>
          </div>

          <div className="rightBarInfoItem">
            <span className="rightbarInfoKey">Relationship</span>
            <span className="rightbarInfoValues">Single</span>
          </div>
        </div>
        <h4 className='rightBarTitle'>User information</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImg' src="assets/person/7.jpeg" alt="" />
            <span className="rightbarFollowingName">Jogn Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img className='rightbarFollowingImg' src="assets/person/6.jpeg" alt="" />
            <span className="rightbarFollowingName">Jogn Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img className='rightbarFollowingImg' src="assets/person/4.jpeg" alt="" />
            <span className="rightbarFollowingName">Jogn Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img className='rightbarFollowingImg' src="assets/person/9.jpeg" alt="" />
            <span className="rightbarFollowingName">Jogn Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img className='rightbarFollowingImg' src="assets/person/1.jpeg" alt="" />
            <span className="rightbarFollowingName">Jogn Carter</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightBar /> : <HomeRightBar /> }
         
      </div>
    </div>
  )
}
