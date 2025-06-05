import {createBrowserRouter, RouterProvider} from "react-router";
import Index from "./Pages/Index.jsx";
import Apartment from "./Pages/Apartment.jsx";
import About from "./Pages/About.jsx";

import apartments from './../data/apartments.json';
import abouts from './../data/abouts.json';
import NotFound from "./Pages/NotFound.jsx";
import {Exception} from "sass";

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
                throw new Exception('Apartment not found');
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
]);

export default function Router() {
    return <RouterProvider router={router}/>;
}