import {generatePath, NavLink, useLoaderData} from "react-router";

import Layout from "../Components/Layout.jsx";
import Thumb from "../Components/Thumb.jsx";

import './Index.scss';
import Banner from './../assets/index_banner.png';

export default function Index() {
    const {apartments} = useLoaderData();

    return <Layout>
        <div className="banner">
            <div className="dark-background"></div>
            <h1 className="title">Chez vous, partout et ailleurs</h1>
            <img className="image" src={Banner} alt=""/>
        </div>

        <div className="all-thumb">
            {apartments.map(apartment => <NavLink
                key={"apartment-" + apartment.id}
                to={generatePath('/apartment/:id/:name', {
                    id: apartment.id,
                    name: apartment.title.toLowerCase().replace(/ /g, '-')
                })}>
                <Thumb
                    title={apartment.title}
                    image={apartment.cover}
                    imageAlt={apartment.title}
                    width="320px" height="320px"/>
            </NavLink>)}
        </div>
    </Layout>
}