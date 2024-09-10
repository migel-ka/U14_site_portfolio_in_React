import Btn from "..//..//componets/btn/index";
import style from "./Lets.module.css";

const Lets = ()=> {
    return (
        <div className={style.title}>
          <div className={style.baner}>
             <p className={style.p}>LET'S</p>
             <Btn />
           </div>
           <p className= {style.p}>
           WORK TOGETHER
           </p>  
        </div>

    );
}

export default Lets;