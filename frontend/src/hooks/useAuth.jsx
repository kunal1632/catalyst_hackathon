import React, { createContext, useContext, useState } from 'react';
import { signInWithCredential, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { handleFirebaseAuthException } from '../helpers/firebaseHelper';
import { collection, doc, setDoc, query, where, getDocs, getFirestore } from "firebase/firestore";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    // const navigate = useNavigate();
    const auth = getAuth();
    const [user, setUser] = useState(auth.currentUser);
    const [isLoading, setIsLoading] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [loginErrors, setLoginErrors] = useState(null);
    const [registerErrors, setRegisterErrors] = useState(null);

    const login = (email, password) => {
        if (!email) {
            setLoginErrors("Email is required!");
            return;
        } else if (!password) {
            setLoginErrors("Password is required!");
            return;
        }
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
            const user = userCredential.user;
            if (user) {
                await saveUserDataInFirebase(user);
                setUser(user);
                window.location.replace('/');
            }
        }).catch(error => {
            setLoginErrors(handleFirebaseAuthException(error.code));
        }).finally(() => setIsLoading(false));
    };

    const register = (
        fname,
        lname,
        email,
        password,
        confirmPassword,
    ) => {
        if (!fname) {
            setRegisterErrors("First Name is Required!");
            return;
        }
        else if (!lname) {
            setRegisterErrors("Last Name is Required!");
            return;
        }
        if (!email) {
            setRegisterErrors("Email is Required!");
            return;
        }
        if (!password) {
            setRegisterErrors("Password is Required!");
            return;
        }
        if (password !== confirmPassword) {
            setRegisterErrors("Password and Current Password does not match");
            return;
        }
        setIsRegistering(true);
        createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
            const user = userCredential.user;
            if (user) {
                await saveUserDataInFirebase(user);
                setUser(user);
                window.location.replace('/');
            }
        }).catch((error) => {
            setRegisterErrors(handleFirebaseAuthException(error.code));
        }).finally(() => {
            setIsRegistering(false);
        });
    };

    const logout = () => {
        signOut(auth);
    };

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email).then(() => {
            alert("Email Sent!");
        }).catch(() => alert("Please Try Again Later!"));
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const user = result.user;
                if (user) {
                    await saveUserDataInFirebase(user);
                    setUser(user);
                    window.location.replace('/');
                }
            }).catch(() => alert("Please Try Again Later!"));
    }

    const saveUserDataInFirebase = async (user) => {
        return await setDoc(doc(collection(getFirestore(), "users"), user.uid), {
            displayName: user.displayName,
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
        });
    }

    return (
        <AuthContext.Provider
            value={{
                user: user || {},
                setUser,
                loginErrors,
                registerErrors,
                isLoading,
                isRegistering,
                register,
                resetPassword,
                login,
                logout,
                googleSignIn,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}
