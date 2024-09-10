import TT from "..//..//assets/Button_tt.png";
import FB from "..//..//assets/Button_fb.png";
import IN from "..//..//assets/Button_in.png";
import style from "./style.module.css";

const Social = ()=> {
    return (
        <div className={style.bord}>
            <bottom>
               <img src={FB} className={style.img} />
            </bottom>
            <bottom>
               <img src={TT} className={style.img} />
            </bottom>
            <bottom>
               <img src={IN} className={style.img} />
            </bottom>
        </div>

    );
}

export default Social;