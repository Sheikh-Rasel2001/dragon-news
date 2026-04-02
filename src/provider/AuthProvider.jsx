import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../Firebase/firebase.init';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // create user for register
    const createUser = (email, password) => {
     return createUserWithEmailAndPassword(auth, email, password); 
    }

    // login user for login
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user 
    const logoutUser = () => {
        return signOut(auth);
    }

    // observe user auth state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unSubscribe();
    }, [])

    const authInfo = {
        user,
        createUser,
        loginUser,
        logoutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;