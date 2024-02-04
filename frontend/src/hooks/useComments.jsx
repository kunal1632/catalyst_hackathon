import React, { createContext, useContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { handleFirebaseAuthException } from '../helpers/firebaseHelper';

const CommentContext = createContext({});

export const CommentProvider = ({ children }) => {
    const auth = getAuth();

    return (
        <CommentContext.Provider
            value={{

            }}>
            {children}
        </CommentContext.Provider>
    );
};

export default function useLike() {
    return useContext(CommentContext);
}
