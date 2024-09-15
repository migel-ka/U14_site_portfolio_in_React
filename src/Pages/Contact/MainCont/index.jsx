import style from "./style.module.css";
import BANER from "..//..//..//assets/contact/SubContainer.png";
import Social from "../../../componets/social";

const MainCont = ()=> {
    return (
       <content >
        <div className={style.contener}>
            <img src={BANER} />
            <div className={style.title}>
                <h3>CONTACT ME</h3>
                <h2>Get in Touch with Me</h2>
                <p> Step into a world of timeless photography with Damien Braun. Explore our range of photography services, each crafted to tell your unique story through captivating images. Whether it's the magic of portraits, the emotion of events, or the allure of commercial photography, we're here to bring your vision to life.</p>
            </div>
            <div className={style.BtnNav}>
                <Social />
            </div>
              <div className={style.titletext}>
              SCROLL DOWN TO SEE<br /> MY JOURNEY
              </div>
        </div>
         
        
       </content>

    );
}

export default MainCont;