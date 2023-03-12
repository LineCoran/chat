import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios';
import UserPreview from '../UserPreview/UserPreview';
import './UserList.css';

export default function UserList() {

  const { isLoading, error, data} = useQuery(['users-search'], async () => {
    const res = await makeRequest.get('/users');
    return res.data;
  });

  console.log(data);

  return (
    <div className='userList'>
      <div className="userListWrapper">
        {
          error ? <p>{error}</p> :
          isLoading
          ? <p>Loading </p>
          : data.map((user) => <UserPreview key={user.id} user={user} />
        )}
      </div>
    </div>
  )
}
