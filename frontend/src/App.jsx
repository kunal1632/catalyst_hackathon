import React, { useState } from "react";
import { createBrowserRouter, useNavigate, RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// import { Home } from './pages/Home';
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import LoginSignupPage from "./pages/Login&Signup";

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
    path: "/home",
    element: <Home />,
  },
]);

export const App = () => {
  const [loading, setLoading] = useState(true);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("uid", uid);
      setLoading(false);
    } else {
      setLoading(false);
      if (!window.location.pathname.startsWith("/auth/")) {
        window.location.replace("/auth/");
      }
    }
  });

  if (loading)
    return <div>Loading...</div>

  return (
    <div className="bg-[#a0a0a5] h-screen">
      <RouterProvider router={router} />
    </div>
  );
};
