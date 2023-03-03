import './Profile.css';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className="profileRight">
          <div className="profileCover">
            <img className='profileCoverImg' src="assets/posts/3.jpeg" alt="" />
            <img className='profileUserImg' src="assets/person/7.jpeg" alt="" />
          </div>

          <div className="profileInfo">
            <h4 className="profileInfoName">Alexey Kuzmichev</h4>
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
