import React, { useState } from "react";
import {
  createBrowserRouter,
  useNavigate,
  RouterProvider,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { AuthProvider } from "./hooks/useAuth";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import LoginSignupPage from "./pages/Login&Signup";
import { FollowProvider } from "./hooks/useFollow";
import { ProfileProvider } from "./hooks/useProfile";
import Spinner from "./components/Spinner/Spinner";
import EditProfile from "./pages/EditProfile";
import PostPage from "./pages/PostPage";

import Chats from "./pages/Message";

const firebaseConfig = {
  apiKey: "AIzaSyCyqmu8JIZwO8VhOlvBUgNI7VaLlbZgufM",
  authDomain: "catalyst-c59d7.firebaseapp.com",
  projectId: "catalyst-c59d7",
  storageBucket: "catalyst-c59d7.appspot.com",
  messagingSenderId: "116923088446",
  appId: "1:116923088446:web:35d3e0df15635e9451db6f",
};

const router = createBrowserRouter([
  {
    path: "/auth/",
    element: <LoginSignupPage />,
  },
  {
    path: "/about/",
    element: <About />,
  },
  {
    path: "/contact/",
    element: <Contact />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile/:user_id/",
    element: <Profile />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
  {
    path: "/post/",
    element: <PostPage />,
  },
  {
    path: "/chats",
    element: <Chats />,
  },
]);

export const App = () => {
  const [loading, setLoading] = useState(true);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setLoading(false);
    } else {
      if (!window.location.pathname.startsWith("/auth/")) {
        window.location.replace("/auth/");
      }
      setLoading(false);
    }
  });

  if (loading) return <Spinner />;

  return (
    <div>
      <AuthProvider>
        <ProfileProvider>
          <FollowProvider>
            <RouterProvider router={router} />
          </FollowProvider>
        </ProfileProvider>
      </AuthProvider>
    </div>
  );
};
