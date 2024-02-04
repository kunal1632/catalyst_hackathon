import React, { createContext, useContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { handleFirebaseAuthException } from '../helpers/firebaseHelper';

const LikeContext = createContext({});

export const ProfileProvider = ({ children }) => {
    const auth = getAuth();

    return (
        <LikeContext.Provider
            value={{

            }}>
            {children}
        </LikeContext.Provider>
    );
};

export default function useLike() {
    return useContext(LikeContext);
}
