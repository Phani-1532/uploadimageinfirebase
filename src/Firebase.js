import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC6DG4QlNN-N8fVDC6oZt-jMFhL-da7-UA",
    authDomain: "upload-images-bd4c6.firebaseapp.com",
    projectId: "upload-images-bd4c6",
    storageBucket: "upload-images-bd4c6.firebasestorage.app",
    messagingSenderId: "77181420055",
    appId: "1:77181420055:web:598684c31cc3cf02499252"
  };

const storage = firebase.initializeApp(firebaseConfig);

export default storage