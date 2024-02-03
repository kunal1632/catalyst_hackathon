import React, { createContext, useContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { handleFirebaseAuthException } from '../helpers/firebaseHelper';

const ProfileContext = createContext({});

export const ProfileProvider = ({ children }) => {
    const auth = getAuth();

    return (
        <ProfileContext.Provider
            value={{

            }}>
            {children}
        </ProfileContext.Provider>
    );
};

export default function useProfile() {
    return useContext(ProfileContext);
}
