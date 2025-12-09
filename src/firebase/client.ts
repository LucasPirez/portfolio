import { initializeApp, getApps } from 'firebase/app';
import { getStorage, ref, listAll } from 'firebase/storage';
import {
  collection,
  getFirestore,
  addDoc,
  Timestamp,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
let app;
if (!getApps.length) {
  app = initializeApp(firebaseConfig);
}

if (!app) {
  throw new Error('Firebase no se ha podido inicializar');
}

const db = getFirestore(app);

export async function sendForm({ ...data }) {
  const form = collection(db, 'formularios');
  const add = await addDoc(form, {
    ...data,
    createdAt: Timestamp.fromDate(new Date()),
  });

  return add;
}

const storage = getStorage();

export async function getImages() {
  try {
    const referencia = ref(storage, '/Tweeter');

    // const response = await getDownloadURL(referencia);
    const list = await listAll(referencia);

    list.items.forEach((u) => console.log(u.fullPath));
  } catch (error) {
    console.log(error);
  }
}
