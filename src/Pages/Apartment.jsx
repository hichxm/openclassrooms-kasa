import {useLoaderData} from "react-router";

import Layout from "../Components/Layout.jsx";
import Carousel from "../Components/Carousel.jsx";

import './Apartment.scss';
import Tag from "../Components/Tag.jsx";
import Stars from "../Components/Stars.jsx";


export default function Apartment() {
    const {apartment} = useLoaderData();

    return <Layout>
        <Carousel images={apartment.pictures} />

        <div className="apartment-content">
            <div className="left-side">
                <div className="content-header">
                    <h1 className="title">{apartment.title}</h1>
                    <span className="location">{apartment.location}</span>
                </div>
                {/* Tags */}
                <div className="tags">
                    {apartment.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </div>
            </div>
            <div className="right-side">
                <div className="profile">
                    <div className="name">
                        {apartment.host.name.split(' ').map((name, index) => <span key={name}>{name}{index === 0 ? <br /> : null}</span>)}
                    </div>

                    <img className="image" src={apartment.host.picture} alt=""/>
                </div>
                <div className="stars">
                    <Stars totalStars={5} stars={apartment.rating} />
                </div>
            </div>
        </div>
    </Layout>
}