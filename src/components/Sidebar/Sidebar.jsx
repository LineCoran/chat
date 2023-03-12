import { Bookmark, HelpOutline, RssFeed, Event, School, WorkOutline } from '@mui/icons-material';
import { Users } from '../../dummyData';
import { Link } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className="sidebarList">
          <Link to={'/'}>
            <li className="sidebarListItem">
              <RssFeed className='sidebarListItemIcon' />
              <span className="sidebarListItemText">Feed</span>
            </li>
          </Link>
          
          <Link to={'/users'}>
            <li className="sidebarListItem">
              <Bookmark className='sidebarListItemIcon' />
              <span className="sidebarListItemText">Users</span>
            </li>
          </Link>

          <li className="sidebarListItem">
            <HelpOutline className='sidebarListItemIcon' />
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <WorkOutline className='sidebarListItemIcon' />
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <Event className='sidebarListItemIcon' />
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <School className='sidebarListItemIcon' />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className='sidebarButton'>Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">


          {
            Users.map((user) => 
            <Friend
              key={user.id}
              username={user.username}
              profilePicture={user.profilePicture}
            />
            )
          }
        </ul>
      </div>
    </div>
  )
}
