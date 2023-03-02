import './Rightbar.css'

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
          <li className="rightbarFiend">
            <div className="rightbarProfileImageContainer">
              <img src="assets/person/4.jpeg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Jogn Carter</span>
          </li>

          <li className="rightbarFiend">
            <div className="rightbarProfileImageContainer">
              <img src="assets/person/4.jpeg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Jogn Carter</span>
          </li>

          <li className="rightbarFiend">
            <div className="rightbarProfileImageContainer">
              <img src="assets/person/4.jpeg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Jogn Carter</span>
          </li>

          <li className="rightbarFiend">
            <div className="rightbarProfileImageContainer">
              <img src="assets/person/4.jpeg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Jogn Carter</span>
          </li>

          <li className="rightbarFiend">
            <div className="rightbarProfileImageContainer">
              <img src="assets/person/4.jpeg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Jogn Carter</span>
          </li>

          <li className="rightbarFiend">
            <div className="rightbarProfileImageContainer">
              <img src="assets/person/4.jpeg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Jogn Carter</span>
          </li>

          <li className="rightbarFiend">
            <div className="rightbarProfileImageContainer">
              <img src="assets/person/4.jpeg" alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">Jogn Carter</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
