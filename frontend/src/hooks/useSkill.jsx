import React, { createContext, useContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { handleFirebaseAuthException } from '../helpers/firebaseHelper';

const SkillContext = createContext({});

export const SkillProvider = ({ children }) => {
    const auth = getAuth();

    return (
        <SkillContext.Provider
            value={{

            }}>
            {children}
        </SkillContext.Provider>
    );
};

export default function useSkill() {
    return useContext(SkillContext);
}
