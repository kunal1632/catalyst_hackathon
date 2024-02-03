import React, { createContext, useContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { handleFirebaseAuthException } from '../helpers/firebaseHelper';

const PostContext = createContext({});

export const ProfileProvider = ({ children }) => {
    const auth = getAuth();

    return (
        <PostContext.Provider
            value={{

            }}>
            {children}
        </PostContext.Provider>
    );
};

export default function usePost() {
    return useContext(PostContext);
}
