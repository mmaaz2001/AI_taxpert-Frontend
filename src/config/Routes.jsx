import React from "react";
import { createBrowserRouter, RouterProvider, Outlet , useNavigate} from "react-router-dom";

import Login from "../component/login/Login";
import Chatbot from "../component/chatBot/Chatbot";
import Faqs from "../screens/FullScreens/Faqs";
import Ebook from "../screens/FullScreens/Ebook";
import HomePage from "../component/Home/HomePage";
// import Navbar from "../component/navbar/Navbar";
import Signup from "../component/login/Signup";
import CookieDisplay from "../component/login/PrintCookies";

function isAuthenticated() {
  return !!localStorage.getItem("token");
}

function AuthenticatedRoute({ element }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
    console.log(localStorage.getItem("token"))
  }, []);

  return <>{element}</>;
}

// Create a router instance
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      // {
      //   path: '/chatbot',
      //   element: <Chatbot />,
      // },
      {
        path: '/chatbot',
        element: <Chatbot />,
      },
      {
        path: '/corporate-tax',
        element: <Ebook />,
      },
      {
        path: '/faqs',
        element: <Faqs />,
      },
      {
        path : '/cookie',
        element: <CookieDisplay />,
      },

      {/* <Route path="/chatbot" element={<AuthenticatedRoute element={<Chatbot />} />} />
        <Route path="/corporate-tax" element={<AuthenticatedRoute element={<Ebook />} />} />
        <Route path="/faqs" element={<AuthenticatedRoute element={<Faqs />} />} /> */}
    ]
  }
]);

// Main component to render routes
function Main() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

// Wrap the router instance with RouterProvider to provide routing context
function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
