import {createBrowserRouter, RouterProvider} from "react-router";

import Index from "./Pages/Index.jsx";
import Apartment from "./Pages/Apartment.jsx";
import About from "./Pages/About.jsx";
import NotFound from "./Pages/NotFound.jsx";

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
            const apartment = apartments.find(apartment => apartment.id === params.id);

            if(!apartment) {
                throw new Error('Apartment not found');
            }

            return {
                apartment,
            }
        },
        errorElement: <NotFound/>,
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
], {
    basename: '/openclassrooms-kasa/',
});

export default function Router() {
    return <RouterProvider router={router}/>;
}