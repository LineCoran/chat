import './Home.css';
import Topbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

export default function Home() {

  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Topbar />
      <div className='homeContainer'>
        <Sidebar />
        <Feed userId = {currentUser.id} isProfile={false}/>
        <Rightbar />
      </div>
    </div>
  )
}
