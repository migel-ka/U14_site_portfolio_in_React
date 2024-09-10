import style from "./style.module.css";
import Img from "..//..//..//..//assets/service/Image.png";
import DOT from "..//..//..//..//assets/Icon.svg";
import BtnNav from "../../../../componets/btnNav";

const PortPhoto = ()=> {
    return (
        <article>
            <div className={style.contener}>
                <div className={style.block}>
                    <div className={style.title}>
                        <h4 className={style.h4}>PORTRAIT PHOTOGRAPHY</h4>
                        <p className={style.p}>Our portrait photography service is all about showcasing your unique personality. Whether you need a professional headshot, a family portrait, or a personal photoshoot, we create images that reflect your true self. We work closely with you to bring out your best angles and expressions, ensuring every portrait tells your story.</p>
                        <button className={style.imgLink}>
                          VIEW PROJECT &#8599;
                        </button>
                    </div>
                    <div className={style.imgblock}>
                        <img src={Img} />
                    </div>
                </div>
                <div className={style.infoblock}>
                    <div className={style.titleblock}>
                        <h4 className={style.infoblockh4}>Individual Session</h4>
                        <div className={style.priceblock}>
                            <p className={style.infoblockp}>$250</p>
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
                            <p className={style.infoblockp}>$400</p>
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
                            <p className={style.infoblockp}>$300</p>
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

export default PortPhoto;