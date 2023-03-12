import Topbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Rightbar from '../../components/Rightbar/Rightbar';
import UserList from '../../components/UserList/UserList';
import './Users.css';

export default function Users() {

  return (
    <div>
      <Topbar />
      <div className='homeContainer'>
        <Sidebar />
        <UserList/>
        <Rightbar />
      </div>
    </div>
  )
}
