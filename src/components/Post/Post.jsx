import './Post.css'
import { MoreVert } from '@mui/icons-material';
import { useState } from 'react';

export default function Post({date, desc = '', like, comment, photo, username, profilePicture}) {

  const [likeCount, setLikeCount] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    setIsLiked(!isLiked);
  }

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
            <img className='likeIcon' onClick={likeHandler} src="assets/like.png" alt="" />
            <img className='likeIcon' onClick={likeHandler} src="assets/heart.png" alt="" />
            <span className="postLikeCounter">{likeCount} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className='postComentText'>{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
