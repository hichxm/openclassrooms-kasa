import Layout from "../Components/Layout.jsx";
import Thumb from "../Components/Thumb.jsx";

import './Index.scss';
import {NavLink, useLoaderData} from "react-router";

export default function Index() {
    const {apartments} = useLoaderData();

    return <Layout>
        <div className="all-thumb">
            {apartments.map(apartment => <NavLink key={"apartment-" + apartment.id} to='/'>
                <Thumb
                    title={apartment.title}
                    image={apartment.cover}
                    imageAlt={apartment.title}
                    width="320px" height="320px" />
            </NavLink>)}
        </div>
    </Layout>
}