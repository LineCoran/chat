import './Post.css'
import { MoreVert } from '@mui/icons-material';

export default function Post({date, desc = '', like, comment, photo, username, profilePicture}) {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImage' src={profilePicture} alt="" />
            <span className='postUserName'>{username}</span>
            <span className='postDate'>{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className='postImage' src={photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src="assets/like.png" alt="" />
            <img className='likeIcon' src="assets/heart.png" alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className='postComentText'>{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
