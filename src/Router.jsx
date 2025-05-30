import {createBrowserRouter, RouterProvider} from "react-router";
import Index from "./Pages/Index.jsx";
import apartments from './data.json';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        loader: () => {
            return {
               apartments,
            }
        },
        children: [],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}