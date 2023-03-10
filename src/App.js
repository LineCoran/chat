import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import { createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import "./App.css";

function App() {
  const { currentUser } = useContext(AuthContext);

  const queryClient = new QueryClient()

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
      path: "/profile/:id",
      element: <ProtectedRoute> <Profile /> </ ProtectedRoute>,
    },
    {
      path: "/",
      element: <ProtectedRoute> <Home /> </ ProtectedRoute>,
    },
  ])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  );
}

export default App;
