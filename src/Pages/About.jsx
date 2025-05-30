import Layout from "../Components/Layout.jsx";
import './About.scss';
import Banner from "../Components/Banner.jsx";
import AboutBanner from "../assets/about_banner.png";

export default function About() {
    return <Layout>
        <Banner backgroundImg={AboutBanner} />

    </Layout>
}