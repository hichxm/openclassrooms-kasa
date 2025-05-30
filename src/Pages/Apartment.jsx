import {useLoaderData} from "react-router";

import Layout from "../Components/Layout.jsx";
import './Apartement.scss';

export default function Apartment() {
    const {apartment} = useLoaderData();

    return <Layout>
        {apartment.title}
    </Layout>
}