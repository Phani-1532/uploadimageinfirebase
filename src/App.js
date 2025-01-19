import './App.css';
import React, { useState } from 'react';
import storage from './Firebase';
import { ref, uploadBytes } from 'firebase/storage';

function App() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState('No file chosen'); // Default message for file name

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setFileName(file.name); // Update the file name
    } else {
      setFileName('No file chosen'); // Reset if no file is selected
    }
  }

  function uploaded() {
    if (image) {
      const storageRef = ref(storage, `/images/${image.name}`);
      uploadBytes(storageRef, image)
        .then(() => {
          alert('File Uploaded Successfully');
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    } else {
      alert('Please select a file to upload!');
    }
  }

  return (
    <div className="App">
      <label htmlFor="file-upload">Choose File</label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
      />
      <p className="file-name">{fileName}</p> {/* Display the file name */}
      <button onClick={uploaded}>Upload</button>
    </div>
  );
}

export default App;
