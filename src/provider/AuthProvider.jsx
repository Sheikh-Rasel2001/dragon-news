import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

    // log in with google provider
    const googleProvider = () => {
        return new GoogleAuthProvider()
    }

    // log in with github provider
    const githubProvider = () => {
        return new GithubAuthProvider();
    }
    // observe user auth state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unSubscribe();
    }, []);

    const authInfo = {
        user,
        createUser,
        loginUser,
        logoutUser,
        googleProvider,
        githubProvider
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;