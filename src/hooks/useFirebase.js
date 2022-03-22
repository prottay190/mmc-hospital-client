import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);
  const auth = getAuth();

  //sign in
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //register
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {});
        setUser(userCredential.user);
        // saveUserToDB(name, email);
        navigate("/");
        setAuthError("");
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  
     // google sing in
     const singInUsingGoogle = () =>{
      setIsLoading(true);
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider)
     .then(result =>{
         setUser(result.user)
      //    console.log(result.user)
     })
     .finally(() =>setIsLoading(false));
     
   }

     //google sing out
     const logout = () =>{
      signOut(auth)
      .then(() => {})
    }

  // observe the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            // User is signed out
            setUser({})
        }
        setIsLoading(false);
    });
    return () => unsubscribe;
}, [])
  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logOut,
    admin,
    adminLoading,
    singInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
