import {generatePath, NavLink, useLoaderData} from "react-router";

import BannerImg from './../assets/index_banner.png';

import Layout from "../Components/Layout.jsx";
import Thumb from "../Components/Thumb.jsx";
import Banner from "../Components/Banner.jsx";

import './Index.scss';

export default function Index() {
    const {apartments} = useLoaderData();

    return <Layout>
        <Banner backgroundImg={BannerImg} title="Chez vous, partout et ailleurs"/>

        <div className="all-thumb">
            {apartments.map(apartment => <NavLink
                key={"apartment-" + apartment.id}
                to={generatePath('/apartment/:id', {
                    id: apartment.id,
                    name: apartment.title.toLowerCase().replace(/ /g, '-')
                })}>
                <Thumb
                    title={apartment.title}
                    image={apartment.cover}
                    imageAlt={apartment.title}
                    width="100%" height="320px"/>
            </NavLink>)}
        </div>
    </Layout>
}