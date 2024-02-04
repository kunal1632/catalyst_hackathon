import React, { createContext, useContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { collection, doc, setDoc, query, where, getDoc, getFirestore } from "firebase/firestore";
import useAuth from './useAuth';

const ProfileContext = createContext({});

export const ProfileProvider = ({ children }) => {
    const { user } = useAuth();
    const getUser = async (user_id) => {
        const userDocRef = doc(getFirestore(), 'users', user_id ? user_id : user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            return userDoc.data();
        } else {
            return null;
        }
    }

    return (
        <ProfileContext.Provider
            value={{
                getUser,
            }}>
            {children}
        </ProfileContext.Provider>
    );
};

export default function useProfile() {
    return useContext(ProfileContext);
}
