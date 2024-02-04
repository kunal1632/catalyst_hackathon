import React, { createContext, useContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { handleFirebaseAuthException } from '../helpers/firebaseHelper';

const ChatContext = createContext({});

export const ChatProvider = ({ children }) => {
    const auth = getAuth();

    return (
        <ChatContext.Provider
            value={{

            }}>
            {children}
        </ChatContext.Provider>
    );
};

export default function useChat() {
    return useContext(ChatContext);
}
