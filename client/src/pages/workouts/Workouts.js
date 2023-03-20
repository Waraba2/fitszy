import React, { useState } from 'react';
import axios from 'axios';

function Workouts() {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null);

  const handleUpload = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('video', video);
    try {
      const response = await axios.post('/workouts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setTitle('');
      setVideo(null);
    } catch (error) {
      console.error('Error uploading workout:', error.message);
    }
  };

  return (
    <div className="Workouts">
      <h1>Add new workout</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="file" accept="video/*" onChange={handleUpload} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Workouts;

