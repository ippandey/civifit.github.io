import { getApps, initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, inMemoryPersistence, setPersistence } from "firebase/auth";

import firebaseConfig from "./config";

function getFirebaseApp() {
  let app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  const auth = getAuth(app);
  return app;
}

export default getFirebaseApp;
