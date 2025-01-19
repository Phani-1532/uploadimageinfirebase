import './App.css';
import React, { useState } from 'react';
import storage from './Firebase';

function App() {
  const [image, setImage] = useState(null)
  function uploaded(){
    storage.ref(`/images/${image.name}`).put(image).on(
      'File Uploaded Successful', alert('SUCCESS'), alert
    )
  }
  return (
    <div className="App">
      <input type='file' value={image} onChange = {(e) => {setImage(e.target.files[0])}} />
      <button type='btn' onClick = {uploaded}>Upload</button>
    </div>
  );
}

export default App;
