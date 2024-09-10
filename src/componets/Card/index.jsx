import style from "./style.module.css";
import Social from "..//social/index";
import Star from "..//star/index";

const Card = ({comment})=> {
    return (
        <div className={style.card}>
            <div className={style.title}>
                <div>
                  <h3 className={style.name}> {comment.name}</h3>
                  <h4 className={style.adress}>{comment.location}</h4>
                </div>
                <Social />
            </div>
            <Star className={style.stars} />
            <p className={style.text}>{comment.text}</p>
        </div>

    );
}

export default Card;