import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC6DG4QlNN-N8fVDC6oZt-jMFhL-da7-UA",
    authDomain: "upload-images-bd4c6.firebaseapp.com",
    projectId: "upload-images-bd4c6",
    storageBucket: "upload-images-bd4c6.appspot.com",
    messagingSenderId: "77181420055",
    appId: "1:77181420055:web:598684c31cc3cf02499252"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
