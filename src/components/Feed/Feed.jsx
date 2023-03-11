import Post from '../Post/Post';
import Share from '../Share/Share';
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios';
import { Button } from '@mui/material';
import './Feed.css';

export default function Feed({userId = null}) {

  const { isLoading, error, data} = useQuery(['posts'], async () => {

    const query = (userId) ? `/posts/${userId}` : `/posts`;
    const res = await makeRequest.get(query);
    return res.data;
  });

  return (
    <div className='feed'>
      <div className="feedWrapper">
        { userId ? <Button variant='contained'>Follow</Button> : <Share /> }
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
