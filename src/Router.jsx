import {createBrowserRouter, RouterProvider} from "react-router";
import Index from "./Pages/Index.jsx";
import apartments from './data.json';
import Apartment from "./Pages/Apartment.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        loader: () => {
            return {
               apartments,
            }
        },
    },
    {
        path: "/apartment/:id/:name",
        element: <Apartment />,
        loader: ({params}) => {
            return {
                apartment: apartments.find(apartment => apartment.id === params.id),
            }
        },
    }
]);

export default function Router() {
    return <RouterProvider router={router} />;
}