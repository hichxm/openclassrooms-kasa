import './Banner.scss';

export default function Banner({backgroundImg, title = ''}) {
    return <div className="banner">
        <div className="banner-dark-background"></div>
        <h1 className="banner-title">{title}</h1>
        <img className="banner-image" src={backgroundImg} alt={title}/>
    </div>
}