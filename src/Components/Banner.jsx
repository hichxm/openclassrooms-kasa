import './Banner.scss';

export default function Banner({backgroundImg, title = ''}) {
    return <div className="banner">
        <div className="dark-background"></div>
        <h1 className="title">{title}</h1>
        <img className="image" src={backgroundImg} alt={title}/>
    </div>
}