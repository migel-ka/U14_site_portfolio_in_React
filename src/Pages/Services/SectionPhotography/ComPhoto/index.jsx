import style from "./style.module.css";
import Img from "..//..//..//..//assets/service/Image3.png";
import DOT from "..//..//..//..//assets/Icon.svg";
import BtnNav from "../../../../componets/btnNav";

const ComPhoto = ()=> {
    return (
        <article>
            <div className={style.contener}>
                <div className={style.block}>
                    <div className={style.title}>
                        <h4 className={style.h4}>COMMERCIAL PHOTOGRAPHY</h4>
                        <p className={style.p}>In the world of business, a compelling image can make all the difference. Our commercial photography service is designed to enhance your brand's visual identity. We create striking images for your products, services, and marketing campaigns that leave a lasting impact on your audience.</p>
                        <button className={style.imgLink}>
                          VIEW PROJECT &#8599;
                        </button>
                    </div>
                    <div className={style.imgblock}>
                        <div className={style.imgBlock}>
                        <img src={Img} />
                        <div className={style.BtnNav}>
                            <BtnNav />
                        </div>
                        </div>
                    </div>
                </div>
                <div className={style.infoblock}>
                    <div className={style.titleblock}>
                        <h4 className={style.infoblockh4}>Individual Session</h4>
                        <div className={style.priceblock}>
                            <p className={style.infoblockp}>$500</p>
                            <button className={style.imgLink}>
                                BOOK A CALL &#8599;
                            </button>
                        </div>
                    </div>
                    <div className={style.Contact}>
                       <div className={style.text}> <img className={style.imgDot} src={DOT} /> <p>COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS, AND MORE. </p></div>
                       <div className={style.text}> <img className={style.imgDot} src={DOT} /> <p>SKILLED PHOTOGRAPHERS WHO KNOW HOW TO SEIZE THE MOMENT. </p></div>
                       <div className={style.text}> <img className={style.imgDot} src={DOT} /> <p>A MIX OF CANDID AND POSED SHOTS FOR A COMPREHENSIVE STORY. </p></div>
                    </div>
                </div>
                <div className={style.infoblock}>
                    <div className={style.titleblock}>
                        <h4 className={style.infoblockh4}>Family Session</h4>
                        <div className={style.priceblock}>
                            <p className={style.infoblockp}>$700</p>
                            <button className={style.imgLink}>
                                BOOK A CALL &#8599;
                            </button>
                        </div>
                    </div>
                    <div className={style.Contact}>
                       <div className={style.text}> <img className={style.imgDot} src={DOT} /> <p>COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS, AND MORE. </p></div>
                       <div className={style.text}> <img className={style.imgDot} src={DOT} /> <p>SKILLED PHOTOGRAPHERS WHO KNOW HOW TO SEIZE THE MOMENT. </p></div>
                       <div className={style.text}> <img className={style.imgDot} src={DOT} /> <p>A MIX OF CANDID AND POSED SHOTS FOR A COMPREHENSIVE STORY. </p></div>
                    </div>
                </div>
                <div className={style.infoblock}>
                    <div className={style.titleblock}>
                        <h4 className={style.infoblockh4}>Couple Session</h4>
                        <div className={style.priceblock}>
                            <p className={style.infoblockp}>Custom Pricing</p>
                            <button className={style.imgLink}>
                                BOOK A CALL &#8599;
                            </button>
                        </div>
                    </div>
                    <div className={style.Contact}>
                       <div className={style.text}> <img className={style.imgDot} src={DOT} /> <p>COVERAGE FOR WEDDINGS, PARTIES, CORPORATE FUNCTIONS, AND MORE. </p></div>
                       <div className={style.text}> <img className={style.imgDot} src={DOT} /> <p>SKILLED PHOTOGRAPHERS WHO KNOW HOW TO SEIZE THE MOMENT. </p></div>
                       <div className={style.text}> <img className={style.imgDot} src={DOT} /> <p>A MIX OF CANDID AND POSED SHOTS FOR A COMPREHENSIVE STORY. </p></div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ComPhoto;