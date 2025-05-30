import {useLoaderData} from "react-router";

import Layout from "../Components/Layout.jsx";
import './Apartment.scss';

export default function Apartment() {
    const {apartment} = useLoaderData();

    return <Layout>
        {apartment.title}
    </Layout>
}