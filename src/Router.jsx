import {createBrowserRouter, redirect, RouterProvider} from "react-router";
import Index from "./Pages/Index.jsx";
import Apartment from "./Pages/Apartment.jsx";
import About from "./Pages/About.jsx";

import apartments from './../data/apartments.json';
import abouts from './../data/abouts.json';
import NotFound from "./Pages/NotFound.jsx";

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
            const apartment = apartments.find(apartment => apartment.id === params.id);

            if(!apartment) {
                return redirect("/404-not-found", 302);
            }

            return {
                apartment,
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
        },
    },
    {
        path: "*",
        element: <NotFound/>,
    },
]);

export default function Router() {
    return <RouterProvider router={router}/>;
}