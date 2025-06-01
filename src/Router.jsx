import {createBrowserRouter, RouterProvider} from "react-router";
import Index from "./Pages/Index.jsx";
import Apartment from "./Pages/Apartment.jsx";
import About from "./Pages/About.jsx";

import apartments from './../data/apartments.json';
import abouts from './../data/abouts.json';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
        loader: () => {
            return {
                apartments,
            }
        },
    },
    {
        path: "/apartment/:id",
        element: <Apartment/>,
        loader: ({params}) => {
            return {
                apartment: apartments.find(apartment => apartment.id === params.id),
            }
        },
    },
    {
        path: "/about",
        element: <About/>,
        loader: () => {
            return {
                abouts,
            }
        }
    }
]);

export default function Router() {
    return <RouterProvider router={router}/>;
}