import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default async function createUser(email, password) {
  const auth = getAuth();
  return await createUserWithEmailAndPassword(auth, email, password);
}
