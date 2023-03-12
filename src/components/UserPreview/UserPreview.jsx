import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import './UserPreview.css';

export default function UserPreview({user}) {

  console.log(user.profilePicture)

  return (
    <div className='userPreview'>
      <div className="userPreviewWrapper">
       <Link to={`/profile/${user.id}`}>
          <div className='userPreviewLeft'>
            <img className='userPreviewLeftPic' src={user.profilePic} alt="user-profile-pic" />
          </div>
        </Link>
        <div className="userPreviewRight">
          <Link to={`/profile/${user.id}`}>
            <p className="userPreviewRightName">{user.name}</p>
          </Link>
          {user.city && <p className='userPreviewRightCity'>{user.city}</p> }
          <IconButton>
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
