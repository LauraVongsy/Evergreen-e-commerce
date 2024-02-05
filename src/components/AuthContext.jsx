import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase.js";
import { UserContext } from "./UserContext.jsx";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const { setUserFirstname, setUserLastname, setIsLogged } = useContext(UserContext);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, [auth]);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;


            const [firstName, lastName] = user.displayName.split(" ");


            setUser({
                ...user,
                firstName,
                lastName,
            });

            // Update the userContext with the extracted name and surname
            setUserFirstname(firstName);
            setUserLastname(lastName);
            setIsLogged(true);
            console.log(firstName, lastName);
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    const signOutUser = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const authContextValue = {
        user,
        signInWithGoogle,
        signOutUser,

    };

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
//importer userContext ici pour pouvoir assigner à user le nom et prenom et mail de notre user google