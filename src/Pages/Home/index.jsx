import Lets from "..//..//componets/Lets/index";
import TAB from "..//..//assets/containerTab.png";
import BANER from "..//..//assets/SubContainer.png";
import style from "./style.module.css";
import Question from "..//..//componets/compHome/sectionFAQ/index";
import Cards from "..//..//componets/cards/index";
import Iam from "..//..//componets/compHome/iam/index";
import PhotoService from "..//..//componets/compHome/photoservice/index";
import Portf from "..//..//componets/compHome/portfolio/index";


const Home = ()=> {
    return (
        <main>
            <div className={style.ABS}>
                <div className={style.nameH}>
                    <p className={style.p}>STUNNING PHOTOGRAPHY BY</p>
                    <h1>DAMIEN BRAUN</h1>
                </div>
                <div className={style.lets}>
                    <Lets />
                </div>
            </div>
            <img src={TAB}/>
            <img src={BANER}/>
            <Iam />
            <PhotoService />
            <Portf />
            <Question />
            <div className={style.cards}>
            <Cards />
            </div>
            
            
        </main>

    );
}

export default Home;