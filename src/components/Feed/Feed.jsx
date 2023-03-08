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

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share />
        {
          error ? <p>{error}</p> :
          isLoading
          ? <p>Loading... </p>
          : data.map((post, index) => <Post key={Math.random()} post={post} />
        )}
      </div>
    </div>
  )
}
