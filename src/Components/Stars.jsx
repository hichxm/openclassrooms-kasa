import StarOrange from "./../assets/star_orange.svg"
import StarGray from "./../assets/star_gray.svg"

import './Stars.scss';

export default function Stars({totalStars, stars}) {
    return <div className="stars">
        {Array.from({length: totalStars}, (_, i) => stars > i
            ? <img src={StarOrange} alt="Orange star"/>
            : <img src={StarGray} alt="Gray star"/>
        )}
    </div>
}