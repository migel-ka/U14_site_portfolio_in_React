import style from "./style.module.css";
import IMAGETWO from "..//..//..//assets/home/ImageTwo.png";
import Btn from "..//..//btn/index";
import DOT from "..//..//..//assets/Icon.svg";
import BtnNav from "../../btnNav/index";

const PhotoService = ()=> {
    return (
        <content>
        <div className={style.title}>
           <div className={style.name}>
             <h3>SERVICES</h3>
             <h2>MY PHOTOGRAPHY SERVICES</h2>
           </div>
           <div className={style.buttonNav}>
           <BtnNav />
              <button className="main-btn">
                 View All Services &rarr;
              </button>
           </div>

        </div>
        <div className={style.contener}>
            <div className={style.textContent}>
                <div className={style.intro}>
                    <h4 className={style.titleName}>
                        EVENTS
                    </h4>
                    <Btn />
                </div>
                <p className={style.titleP}>
                    Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.
                </p>
                <div className={style.Contact}>
                    <p className={style.titleText}>Service Highlights</p>
                   <div className={style.text}> <img className={style.imgDot} src={DOT} /> <p>COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS, AND MORE. </p></div>
                   <div className={style.text}> <img className={style.imgDot} src={DOT} /> <p>SKILLED PHOTOGRAPHERS WHO KNOW HOW TO SEIZE THE MOMENT. </p></div>
                   <div className={style.text}> <img className={style.imgDot} src={DOT} /> <p>A MIX OF CANDID AND POSED SHOTS FOR A COMPREHENSIVE STORY. </p></div>
                   <div className={style.text}> <img className={style.imgDot} src={DOT} /> <p>QUICK TURNAROUND FOR YOU TO RELIVE THE DAY'S HIGHLIGHTS. </p></div>
                </div>
            </div>
            <div><img src={IMAGETWO} /></div>
        </div>
    </content>
    );
}

export default PhotoService;