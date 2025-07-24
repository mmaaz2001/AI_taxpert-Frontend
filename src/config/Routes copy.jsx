import { createBrowserRouter, RouterProvider, useNavigate, Outlet } from "react-router-dom";

import Login from "../component/login/Login";
import Chatbot from "../component/chatBot/Chatbot";
import Faqs from "../screens/FullScreens/Faqs";
import Ebook from "../screens/FullScreens/Ebook";
import HomePage from "../component/Home/HomePage";
import Navbar from "../component/navbar/Navbar";
import Signup from "../component/login/Signup";

// Function to simulate authentication check
// function isAuthenticated() {
//   return !!localStorage.getItem("token");
// }

// Higher-order component for authentication
// function AuthenticatedRoute({ element }) {
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     if (!isAuthenticated()) {
//       navigate("/login");
//     }
//   }, []);

//   return <>{element}</>;
// }

const router = createBrowserRouter([{
  path: "/",
  element: <Main />,
  children: [
    {
      path: '/',
      element: <HomePage />,
    },
    {/* <Route path="/chatbot" element={<AuthenticatedRoute element={<Chatbot />} />} />
        <Route path="/corporate-tax" element={<AuthenticatedRoute element={<Ebook />} />} />
        <Route path="/faqs" element={<AuthenticatedRoute element={<Faqs />} />} /> */}
  ]
}
]);


function Main() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
function AppRouter() {
  return <RouterProvider router={router} />
}

export default router;
