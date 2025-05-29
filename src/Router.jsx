import {createBrowserRouter, RouterProvider} from "react-router";
import Index from "./Pages/Index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        children: [],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}