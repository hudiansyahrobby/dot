import Firebase from '../firebase';
import { AuthType } from '../types/AuthType';

export const signin = ({ email, password }: AuthType) =>
  Firebase.auth().signInWithEmailAndPassword(email, password);

export const signup = ({ email, password }: AuthType) =>
  Firebase.auth().createUserWithEmailAndPassword(email, password);
