import React, { createContext, useContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { handleFirebaseAuthException } from '../helpers/firebaseHelper';

const FollowContext = createContext({});

export const FollowProvider = ({ children }) => {
    const auth = getAuth();

    return (
        <FollowContext.Provider
            value={{

            }}>
            {children}
        </FollowContext.Provider>
    );
};

export default function useLike() {
    return useContext(FollowContext);
}
