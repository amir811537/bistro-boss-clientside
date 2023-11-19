import { useEffect, useState } from "react";
import { createContext } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app);

 export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser =(email,password)=>{
        setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)
    }

    const singnIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth)

    }


    useEffect(()=>{


     const unsubcribe=  onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
    console.log('=========>>',currentUser)
    setLoading(false);

});
return ()=>{
    return unsubcribe();
}

    },[])

    

    const authInfo={
user,loading,createUser,singnIn,logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;