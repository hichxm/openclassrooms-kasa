import {useLoaderData} from "react-router";

import Layout from "../Components/Layout.jsx";
import Carousel from "../Components/Carousel.jsx";

import './Apartment.scss';


export default function Apartment() {
    const {apartment} = useLoaderData();

    return <Layout>
        <Carousel images={apartment.pictures} />
    </Layout>
}