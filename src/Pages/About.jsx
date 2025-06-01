import Layout from "../Components/Layout.jsx";
import Banner from "../Components/Banner.jsx";
import AboutBanner from "../assets/about_banner.png";
import Dropdown from "../Components/Dropdown.jsx";
import {useLoaderData} from "react-router";

import './About.scss';

export default function About() {
    const {abouts} = useLoaderData();

    return <Layout>
        <Banner backgroundImg={AboutBanner} />

        <div className="about">
            {abouts.map((about, index) => <Dropdown key={"about-" + index} title={about.title}>
                {about.content}
            </Dropdown>)}
        </div>
    </Layout>
}