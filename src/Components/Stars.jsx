import StarOrange from "./../assets/star_orange.svg"
import StarGray from "./../assets/star_gray.svg"

import './Stars.scss';

export default function Stars({totalStars, stars}) {
    return <div className="stars">
        {Array.from({length: totalStars}, (_, i) => stars > i
            ? <img key={i} src={StarOrange} alt="Orange star"/>
            : <img key={i} src={StarGray} alt="Gray star"/>
        )}
    </div>
}