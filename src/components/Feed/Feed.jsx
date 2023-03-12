import Post from '../Post/Post';
import Share from '../Share/Share';
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios';
import './Feed.css';

export default function Feed({userId = null, isProfile, isMyProfile=true}) {

  const { isLoading, error, data} = useQuery(['posts'], async () => {
    const query = (isProfile) ? `/posts/${userId}` : `/posts`;
    const res = await makeRequest.get(query);
    return res.data;
  });
  return (
    <div className='feed'>
      <div className="feedWrapper">
        {isMyProfile && <Share />}
        {
          error ? <p>{error}</p> :
          isLoading
          ? <p>Loading </p>
          : data.map((post, index) => <Post key={Math.random()} post={post} />
        )}
      </div>
    </div>
  )
}
