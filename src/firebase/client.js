import { initializeApp, getApps } from 'firebase/app';
import { getStorage, ref, listAll } from 'firebase/storage';
import {
  collection,
  getFirestore,
  addDoc,
  Timestamp,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBT-OYEW12f3ELL8qCsJupdK3rmfNdW3Bg',
  authDomain: 'pirezlucas-portfolio.firebaseapp.com',
  projectId: 'pirezlucas-portfolio',
  storageBucket: 'pirezlucas-portfolio.appspot.com',
  messagingSenderId: '416913937459',
  appId: '1:416913937459:web:53da5d65d9d5e1df95ff46',
};
let app;
if (!getApps.length) {
  app = initializeApp(firebaseConfig);
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
