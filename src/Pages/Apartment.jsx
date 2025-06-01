import {useLoaderData} from "react-router";

import Layout from "../Components/Layout.jsx";
import Carousel from "../Components/Carousel.jsx";

import Tag from "../Components/Tag.jsx";
import Stars from "../Components/Stars.jsx";
import Dropdown from "../Components/Dropdown.jsx";

import './Apartment.scss';

export default function Apartment() {
    const {apartment} = useLoaderData();

    return <Layout>
        <Carousel images={apartment.pictures} />

        <div className="apartment-content">
            <div className="header">
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
            <div className="body">
                <div className="description">
                    <Dropdown title="Description">
                        {apartment.description}
                    </Dropdown>
                </div>
                <div className="equipments">
                    <Dropdown title="Équipements">
                        <ul className="list">
                            {apartment.equipments.map(equipment => <li key={equipment}>{equipment}</li>)}
                        </ul>
                    </Dropdown>
                </div>
            </div>
        </div>
    </Layout>
}