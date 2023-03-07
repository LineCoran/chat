import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import { createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  //const currentUser = false;

  const ProtectedRoute = ({children}) => {

    if (!currentUser) {
      console.log(currentUser)
      return <Navigate to={"/login"} />
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/profile",
      element: <ProtectedRoute> <Profile /> </ ProtectedRoute>,
    },
    {
      path: "/",
      element: <ProtectedRoute> <Home /> </ ProtectedRoute>,
    },
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
