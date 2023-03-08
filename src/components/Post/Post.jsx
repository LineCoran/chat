import { MoreVert } from '@mui/icons-material';
import { useState } from 'react';
import moment from 'moment';
import './Post.css'

// export default function Post({date, desc = '', like, comment, photo, username, profilePicture}) {

export default function Post({ post }) {

  const [likeCount, setLikeCount] = useState(10);
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
            <img className='postProfileImage' src='./assets/person/1.jpeg' alt="" />
            <span className='postUserName'>{post.name}</span>
            <span className='postDate'>{moment(post.createdAt).fromNow()}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className='postImage' src={`./upload/${post.image}`} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' onClick={likeHandler} src="assets/like.png" alt="" />
            <img className='likeIcon' onClick={likeHandler} src="assets/heart.png" alt="" />
            <span className="postLikeCounter">25 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className='postComentText'>25 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
