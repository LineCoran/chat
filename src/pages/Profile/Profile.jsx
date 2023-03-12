import Topbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { makeRequest } from '../../axios';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { useQueryClient, useMutation } from '@tanstack/react-query';

import './Profile.css';

export default function Profile() {

  const location = useLocation();
  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const userId = Number(location.pathname.split('/')[2]);
  const isMyProfile = currentUser.id === userId;

  const { isLoading, error, data} = useQuery(['users', userId], async () => {
    const res = await makeRequest.get("users/"+Number(userId));
    return res.data;
  });

  const { isLoading: relationIsLoading, error: relationshipError, data: relationshipData} = useQuery(['relationship', userId], async () => {
    const res = await makeRequest.get("relationship/?followedUserId="+userId);
    return res.data;
  });

  const mutation = useMutation({
    mutationFn: (following) => {
      if (following) return makeRequest.delete("/relationship?userId="+userId);
      return makeRequest.post("/relationship?userId="+userId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['relationship', userId]})
    }
  })

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id))
  }

  return (
    isLoading 
    ? <p>Loding...</p>
    : <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className="profileRight">
          <div className="profileCover">
            <img className='profileCoverImg' src={data.coverPic} alt="" />
            <img className='profileUserImg' src={data.profilePic} alt="" />
          </div>

          <div className="profileInfo">
            <h4 className="profileInfoName">{data.name}</h4>
            <h4 className="profileInfoDesc">{data.status}</h4>
            {
            isMyProfile 
            ? <Button variant='contained'>Update</Button> 
            : <Button onClick={handleFollow} variant={
              relationshipData && relationshipData.includes(currentUser.id)
                ? `outlined`
                : `contained`
            } 
            
            color={
              relationshipData && relationshipData.includes(currentUser.id)
                ? `primary` 
                : `success`
            }>
              {
                relationshipData && relationshipData.includes(currentUser.id)
                ? `Unfollow`
                : `Follow`
              }
            </Button> 
          }
          </div>
          <div className="profileRightBottom">
            <Feed userId={userId} isProfile={true} isMyProfile={isMyProfile}/>
            <Rightbar profile={data}/>
          </div>
        </div>
      </div>
    </>
  )
}
