import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Home from "./PageAll/Home.jsx";
import Allfoods from "./PageAll/Allfoods.jsx";
import AuthProvider from "./Authentication/Authprovider.jsx";
// import Login from "./PageAll/Auth/Login.jsx";
import PrivateRoute from "./Authentication/Privateroute.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./PageAll/Update.jsx";
import Mycart from "./PageAll/Mycart.jsx";
import Error from "./PageAll/Error.jsx";
import Gallary from "./PageAll/Gallary.jsx";
import SingleFoodPage from "./AllComponents/SingleFoodPage.jsx";
import AuthPage from "./PageAll/Auth/Authpage.jsx";
import MyProfile from "./PageAll/Myprofile.jsx";
import AddFoodItem from "./PageAll/AddFoodItem.jsx";
import Mypostfood from "./PageAll/Mypostfood.jsx";



const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/food/:_id",
        element: (
          
          <PrivateRoute>
            <SingleFoodPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/allfoods",
        element: <Allfoods />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "myprofile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "add-food-item",
        element: (
          <PrivateRoute>
            <AddFoodItem />
          </PrivateRoute>
        ),
      },
      {
        path: "my-added-food-items",
        element: (
          <PrivateRoute>
            <Mypostfood />
          </PrivateRoute>
        ),
      },
      {
        path: "updateitem/:_id",
        loader: async ({ params }) =>
          fetch(`https://assainment-11-food-related-server-007.vercel.app/food/${params._id}`),
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
      },
      {
        path: "my-ordered-food-items",
        element: (
          <PrivateRoute>
            <Mycart />
          </PrivateRoute>
        ),
      },
      {
        path: "gallery",
        element: <Gallary></Gallary>,
      },
    ],
  },
]);
console.warn("Future flags enabled:", {
  partialHydration: true,
  skipActionErrorRevalidation: true,
  normalizeFormMethod: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
     
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}
        future={{
          v7_partialHydration: true, 
          v7_skipActionErrorRevalidation: true, 
          v7_normalizeFormMethod: true, 
        }}
        ></RouterProvider>
        <ToastContainer />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
