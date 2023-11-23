/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";

import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublics=useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleProvider= new GoogleAuthProvider();


  const googleSignin=(value)=>{
   return signInWithPopup(auth,googleProvider);
  }


  const singnIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
if(currentUser){
  const userinfo={email:currentUser.email}
  // get token and store clintside
axiosPublics.post('/jwt',userinfo)
.then(res=>{
  if(res.data.token){
    localStorage.setItem('access-token',res.data.token)
  }
})

}else{
  // remove token (if token store in clinet side )
localStorage.removeItem('access-token');
}
      setLoading(false);
    });
    return () => {
      return unsubcribe();
    };
  }, [axiosPublics]);

  const authInfo = {
    user,
    loading,
    createUser,
    singnIn,
    logOut,
    updateUserProfile,
    googleSignin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
