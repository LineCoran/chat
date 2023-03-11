import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AuthContext } from '../../context/authContext';
import { MoreVert } from '@mui/icons-material';
import { useContext, useReducer } from 'react';
import Comments from '../Comments/Comments';
import { IconButton } from '@mui/material';
import { makeRequest } from '../../axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Post.css'

export default function Post({ post }) {

  const { currentUser } =  useContext(AuthContext);
  
  const [show, setShow] = useReducer(show => !show, false);

  const { isLoading, error, data} = useQuery(['likes', post.id], async () => {
    const res = await makeRequest.get("/likes?postId="+post.id);
    return res.data;
  });

  const {isLoading: commentsIsLoading, error: commentsError, data: postComments} = useQuery(['comments', post.id], async () => {
    const res = await makeRequest.get('/comments?postId='+post.id);
    return res.data;
  })

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (liked) => {
      if (liked) return makeRequest.delete("/likes?postId="+post.id);
      return makeRequest.post("/likes", {postId: post.id});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['likes']})
    }
  })

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id))
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${post.userId}`}>
              <img className='postProfileImage' src={post.profilePic} alt="" />
            </Link>
            <span className='postUserName'>{post.name}</span>
            <span className='postDate'>{moment(post.createdAt).fromNow()}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className='postImage' src={post.image} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <IconButton onClick={handleLike}>
              { data && data.includes(currentUser.id) 
              ? <FavoriteIcon  htmlColor='red' /> 
              : <FavoriteBorderIcon />}
            </IconButton>
            <span className="postLikeCounter">
              { isLoading 
              ? 0
              : `${data.length} Likes`
            }
            </span>
               
          </div>
          <div className="postBottomRight" onClick={setShow}>
            <ChatBubbleOutlineIcon />
            <span className='postComentText'>
              {postComments ? `${postComments.length} comments` : `Loading...`}</span>
          </div>
        </div>
        { show && <Comments commentsIsLoading={commentsIsLoading} postId={post.id} comments={postComments}/> }
      </div>
    </div>
  )
}
