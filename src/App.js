import './App.css';
import React, { useState } from 'react';
import storage from './Firebase';
import { ref, uploadBytes } from 'firebase/storage';  // Import the necessary functions from Firebase SDK

function App() {
  const [image, setImage] = useState(null);

  function uploaded() {
    if (image) {
      const storageRef = ref(storage, `/images/${image.name}`);  // Use ref() from Firebase to create a reference
      uploadBytes(storageRef, image).then(() => {
        alert('File Uploaded Successfully');
      }).catch((error) => {
        console.error("Error uploading file:", error);
      });
    }
  }

  return (
    <div className="App">
      <input type='file' onChange={(e) => { setImage(e.target.files[0]) }} />
      <button type='btn' onClick={uploaded}>Upload</button>
    </div>
  );
}

export default App;
