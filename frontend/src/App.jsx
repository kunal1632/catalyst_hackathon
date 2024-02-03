import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { Home } from './pages/Home';
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import LoginSignupPage from "./pages/Login&Signup";
import { Home } from "./pages/Home";
import Chats from "./pages/Message"

const router = createBrowserRouter([
  {
    path: "/",
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
  {
    path: "/chats",
    element: <Chats />,
  },
]);

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
