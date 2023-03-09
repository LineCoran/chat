import { useContext, useState } from 'react';
import { makeRequest } from '../../axios';
import { AuthContext} from '../../context/authContext'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import './Comments.css';

export default function Comments({postId}) {


  const {isLoading, error, data} = useQuery(['comments', postId], async () => {
    const res = await makeRequest.get('/comments?postId='+postId);
    return res.data;
  })

  const queryClient = useQueryClient();
  const {currentUser} = useContext(AuthContext);

  const [desc, setDesc] = useState('');


  const mutation = useMutation({
    mutationFn: (newComment) => {
      return makeRequest.post("/comments", newComment)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['comments']})
    }
  })

  const handleComment = async (e) => {
    e.preventDefault();
    mutation.mutate({desc, postId});
    setDesc("");
  }


  return (
    <div className='comments'>
      <div className='commentWrite'>
        <img className='commentPic' src={currentUser.profilePic} alt="" />
        <input
          className='commentWriteInput'
          type="text"
          placeholder='Write a comment'
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <button onClick={handleComment} className='commentWriteSend'>Send</button>
      </div>
      { isLoading 
      ? <p>Loading...</p>  
      : data.map(comment => (
          <div key={comment.id} className='comment'>
            <img className='commentPic' src={comment.profilePic} alt="" />
            <div className='commentInfo'>
              <span className='commentInfoName'>{comment.name}</span>
              <p className='commentInfoDesc'>{comment.desc}</p>
            </div>
            <span className='commentCreatedAt'>{moment(comment.createAt).fromNow()}</span>
          </div>
        ))
      }
    </div>
  )
}
