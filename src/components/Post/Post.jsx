import './Post.css'
import { MoreVert } from '@mui/icons-material';

export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className='postProfileImage' src="assets/person/7.jpeg" alt="" />
            <span className='postUserName'>Alexey Kuzmichev</span>
            <span className='postDate'>5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey my it's my first post. I can tell you about my intresting life!</span>
          <img className='postImage' src="assets/posts/3.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src="assets/like.png" alt="" />
            <img className='likeIcon' src="assets/heart.png" alt="" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className='postComentText'>9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
