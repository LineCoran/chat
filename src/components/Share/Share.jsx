import './Share.css';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import { useState } from 'react';
import { makeRequest } from '../../axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function Share() {

  const queryClient = useQueryClient();

  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null);

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append('file', image);
      const res = await makeRequest.post('/upload', formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return makeRequest.post("/posts", newPost)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']})
    }
  })

  const handleShare = async (e) => {
    e.preventDefault();
    let imageUrl = '';
    if (image) imageUrl = await uploadImage();
    mutation.mutate({desc, image: imageUrl});
    setImage(null);
    setDesc("");
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <div className="shareTopLeft">
            <img className='shareProfileImg' src="assets/person/3.jpeg" alt="" />
            <input
              className='shareInput'
              placeholder="What's in your mind"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
            </div>
          <div>
            {image && <img className='imageUpload' alt='upload-image' src={URL.createObjectURL(image)}></img>}
          </div>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
            <input type="file" id='file' style={{display: "none"}} onChange={e => setImage(e.target.files[0])} />
              <label htmlFor="file">
                <PermMedia htmlColor='tomato' className='shareIcon' />
                <span id='file' className='shareOptionText'>Photo or video</span>
              </label>
            </div>

            <div className="shareOption">
              <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>

            <div className="shareOption">
              <Room htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>

            <div className="shareOption">
              <EmojiEmotions htmlColor='gold' className='shareIcon' />
              <span className='shareOptionText'>Feeling</span>
            </div>
          </div>
          <button onClick={handleShare} className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}
