import React, { createContext, useContext, useRef, useState } from 'react';
import { getAuth } from "firebase/auth";
import { collection, doc, setDoc, query, where, getDocs, getFirestore, deleteDoc } from "firebase/firestore";
import firebase from "firebase/app";

// import 'firebase/firestore';
// import firebase from 'firebase/app';
import useAuth from '../hooks/useAuth';

const FollowContext = createContext({});

export const FollowProvider = ({ children }) => {
    const followRef = useRef(collection(getFirestore(), "follow"));
    const { user } = useAuth();

    const getFollowings = async (user_id) => {
        const q = query(followRef.current, where("user_id", "==", user_id));
        const querySnapshot = await getDocs(q);
        let followings = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            followings.push(data);
        });
        return followings;
    }

    const getFollowers = async (user_id) => {
        const q = query(followRef.current, where("following", "==", user_id));
        const querySnapshot = await getDocs(q);
        let followers = [], isFollowing;
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            followers.push(data);
            console.log("da", data.user_id, user.uid);
            if (data.user_id === user.uid) {
                isFollowing = true;
            }

            console.log("isFollowing", isFollowing);
        });
        return { followers, isFollowing };
    }

    const follow = async (user_id) => {
        try {
            await setDoc(doc(followRef.current, `${user.uid}${user_id}`), {
                user_id: user.uid,
                following: user_id,
            });
            return true;
        } catch (e) {
            console.log("e is", e);
            return false;
        }

    }

    const unFollow = async (user_id) => {
        try {
            const q = query(followRef.current, where("user_id", "==", user.uid), where("following", "==", user_id));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(async (doc) => {
                const documentRef = doc.ref;
                await deleteDoc(documentRef);
            });
            return true;
        } catch (e) {
            return false;
        }
    }

    return (
        <FollowContext.Provider
            value={{
                getFollowings,
                getFollowers,
                follow,
                unFollow,
            }}>
            {children}
        </FollowContext.Provider>
    );
};

export default function useFollow() {
    return useContext(FollowContext);
}
