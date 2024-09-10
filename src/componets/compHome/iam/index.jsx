import style from "./style.module.css";
import IMAGE from "..//..//..//assets/home/image.png";
import Social from "../../social/index";

const Iam = ()=> {
    return (
        <content>
        <div className={style.title}>
           <div className={style.name}>
             <h3>ABOUT</h3>
             <h2>I AM DANIEM</h2>
           </div>
           <button className="main-btn">
             Know More &rarr;
           </button>
        </div>
        <div className={style.contener}>
            <div><img src={IMAGE} /></div>
            <div className={style.textContent}>
                <div className={style.intro}>
                    <h4 className={style.titleName}>
                        <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z" fill="#AFA1F7"/>
                        </svg>
                        Introduction
                    </h4>
                    <p className={style.titleP}>
                    My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.
                    </p>
                </div>
                <div className={style.Contact}>
                    <h4 className={style.titleName}>
                        <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 0L22.2577 17.1716L39 20L22.2577 22.8284L19.5 40L16.7423 22.8284L0 20L16.7423 17.1716L19.5 0Z" fill="#AFA1F7"/>
                        </svg>
                        Contact Information
                    </h4>
                    <div className={style.data}>
                        <div className={style.tab}>
                            <p>Email</p>
                            <a href="mailto:damienbraun@gmail.com">damienbraun@gmail.com</a>
                        </div>
                        <div className={style.tab}>
                            <p>Phone Number</p>
                            <a href="tel:+00 000000000">+00 000000000</a>
                        </div>
                    </div>
                    <div className={style.btnCont}>
                        <Social />
                        <button className="main-btn">
                           Let’s Work
                        </button>
                        <button className="main-btn">
                           Download CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </content>
    );
}

export default Iam;