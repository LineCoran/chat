import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.css';
import { Posts } from '../../dummyData';
import { Users } from '../../dummyData';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { makeRequest } from '../../axios';

export default function Feed() {

  const { isLoading, error, data} = useQuery(['posts'], async () => {
    const res = await makeRequest.get("/posts");
    return res.data;
  });
  
  console.log(data);

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {
          Posts.map((post) => {
            const {username, profilePicture} = Users.filter(user => user.id === post.userId)[0];
            return <Post
              key={post.id}
              date={post.date}
              desc={post.desc}
              like={post.like}
              comment={post.comment}
              username={username}
              profilePicture={profilePicture}
              photo={post.photo}/>
          }   
        )}
        <Post />
      </div>
    </div>
  )
}
