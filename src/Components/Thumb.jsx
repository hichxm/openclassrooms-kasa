import './Thumb.scss';

export default function Thumb({title, image, imageAlt = '', width = '320px', height = '320px'}) {
    return <div className="thumb" style={{width, height}}>
        <div className="content">
            <h1 className="title">{title}</h1>
        </div>
        <img className="image" src={image} alt={imageAlt}/>
    </div>
}