import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./config";

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// export default app;
export const db = getFirestore(app);

export default db;
