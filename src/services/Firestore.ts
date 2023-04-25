import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_PUBLIC_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
	appId: process.env.REACT_APP_APP_ID,
};

const firebaseInstance = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseInstance);
export default firebaseInstance;
