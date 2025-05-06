import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import LocalBusinesses from "../pages/LocalBusinesses";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../components/NotFound ";
import Spinner from "../components/Spinner";
import ViewDetails from "../components/subscription/ViewDetails";
import PrivateRoutes from "./PrivateRoutes";
import MyProfile from "../pages/MyProfile";
import ResetPassword from "../pages/ResetPassword";
import Connect from "../pages/Connect";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Spinner />,
                loader: () => fetch('../subscription.json'),
                Component: Home
            },
            { path: '/about', Component: About },
            { path: '/login', Component: Login },
            { path: '/register', Component: Register },
            { path: '/reset-password', Component: ResetPassword },
            {
                path: '/connect',
                hydrateFallbackElement: <Spinner />,
                loader: () => fetch('../sponsors.json'),
                Component: Connect
            },
            // private routes 
            {
                path: '/service/:id',
                hydrateFallbackElement: <Spinner />,
                loader: () => fetch('../subscription.json'),
                element:
                    <PrivateRoutes>
                        <ViewDetails />
                    </PrivateRoutes>
            },
            {
                path: '/my-profile',
                element: <PrivateRoutes>
                    <MyProfile />
                </PrivateRoutes>
            },
            {
                path: '/local-business',
                element: <PrivateRoutes>
                    <LocalBusinesses />
                </PrivateRoutes>
            },



            // private routes 

            // {
            //     path: '/profile',
            //     element:
            //         <PrivateRoutes>
            //             <Profile />
            //         </PrivateRoutes>
            // },
            // {
            //     path: '/news',
            //     element:
            //         <PrivateRoutes>
            //             <News />
            //         </PrivateRoutes>
            // },
        ]
    },
]);

export default router;