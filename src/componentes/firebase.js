// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyByJkQ9Vj-_IyLpEoVOgkmKSDT2aiLwahk',
    authDomain: 'fb-bdbreact4.firebaseapp.com',
    projectId: 'fb-bdbreact4',
    storageBucket: "fb-bdbreact4.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
