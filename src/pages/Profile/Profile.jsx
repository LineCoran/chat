import './Profile.css';
import Topbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { makeRequest } from '../../axios';

export default function Profile() {

  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const [, , userId] = location.pathname.split('/');

  const { isLoading, error, data} = useQuery(['users', userId], async () => {
    const res = await makeRequest.get("users/"+Number(userId));
    return res.data;
  });

  return (
    isLoading 
    ? <p>Loding...</p>
    : <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className="profileRight">
          <div className="profileCover">
            <img className='profileCoverImg' src={data.coverPic} alt="" />
            <img className='profileUserImg' src={data.profilePic} alt="" />
          </div>

          <div className="profileInfo">
            <h4 className="profileInfoName">{data.name}</h4>
            <h4 className="profileInfoDesc">{data.status}</h4>
          </div>
          
          <div className="profileRightTop"></div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile={data}/>
          </div>
        </div>
      </div>
    </>
  )
}
