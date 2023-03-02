import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.css';
import { Posts } from '../../dummyData';
import { Users } from '../../dummyData';

export default function Feed() {
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
