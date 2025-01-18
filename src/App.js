import './App.css';
import React, { useState } from 'react';
import storage from './Firebase';

function App() {
  const [image, setImage] = useState(null)
  function uploaded(){
    alert('Uploaded ' + image.name)
  }
  return (
    <div className="App">
      <input type='file' onChange = {(e) => {setImage(e.target.files[0])}} />
      <button type='btn' onClick = {uploaded}>Upload</button>
    </div>
  );
}

export default App;
