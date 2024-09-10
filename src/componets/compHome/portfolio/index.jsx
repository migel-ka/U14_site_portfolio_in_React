import style from "./style.module.css";
import BtnNav from "../../btnNav/index";
import IMG1 from "..//..//..//assets/home/Image1.png";
import IMG2 from "..//..//..//assets/home/Image2.png";
import IMG3 from "..//..//..//assets/home/Image3.png";
const Portf = ()=> {
    return (
        <content>
        <div className={style.title}>
           <div className={style.name}>
             <h3>PORTFOLIO</h3>
             <h2>EXPLORE MY PHOTOGRAPHY WORK</h2>
           </div>
           <div className={style.buttonNav}>
           <BtnNav />
              <button className="main-btn">
                 View All Services &rarr;
              </button>
           </div>
        </div>
        <div className={style.contener}>
            <div className={style.postPhoto}>
                <img src={IMG1} />
                <div className={style.imgPosit}>
                    <div className={style.titleImgPosit}>
                        <h4>Faces of Resilience</h4>
                        <p>March 2022</p>
                    </div>
                    <button className={style.imgLink}>
                       VIEW PROJECT &#8599;
                    </button>
                </div>
            </div>
            <div className={style.postPhoto}>
                <img src={IMG2} />
                <div className={style.imgPosit}>
                    <div className={style.titleImgPosit}>
                        <h4>Faces of Resilience</h4>
                        <p>March 2022</p>
                    </div>
                    <button className={style.imgLink}>
                       VIEW PROJECT &#8599;
                    </button>
                </div>
            </div>
            <div className={style.postPhoto}>
                <img src={IMG3} />
                <div className={style.imgPosit}>
                    <div className={style.titleImgPosit}>
                        <h4>Faces of Resilience</h4>
                        <p>March 2022</p>
                    </div>
                    <button className={style.imgLink}>
                       VIEW PROJECT &#8599;
                    </button>
                </div>
            </div>
        </div>
    </content>
    );
}

export default Portf;