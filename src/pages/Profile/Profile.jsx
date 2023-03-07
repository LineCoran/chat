import './Profile.css';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

export default function Profile() {

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className="profileRight">
          <div className="profileCover">
            <img className='profileCoverImg' src="assets/posts/3.jpeg" alt="" />
            <img className='profileUserImg' src={currentUser.profilePic} alt="" />
          </div>

          <div className="profileInfo">
            <h4 className="profileInfoName">{currentUser.name}</h4>
            <h4 className="profileInfoDesc">Hello my friends</h4>
          </div>
          
          <div className="profileRightTop"></div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}
