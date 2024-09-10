import style from "./style.module.css";
import BtnNav from "../../../componets/btnNav/index";
import IMG1 from "..//..//..//assets/portf/Image1.png";
import IMG2 from "..//..//..//assets/portf/Image2.png";
import IMG3 from "..//..//..//assets/portf/Image3.png";
import IMG4 from "..//..//..//assets/portf/Image4.png";
import IMG5 from "..//..//..//assets/portf/Image5.png";
import IMG6 from "..//..//..//assets/portf/Image6.png";
import IMG7 from "..//..//..//assets/portf/Image7.png";
import IMG8 from "..//..//..//assets/portf/Image8.png";
import IMG9 from "..//..//..//assets/portf/Image9.png";

const SectionPhoto = ()=> {
    return (
        <content>
        <article>
              <div className={style.title}>
             <div className={style.name}>
               <h4 >PORTRAITS PHOTOGRAPHY</h4>
             </div>
             <div className={style.buttonNav}>
             <BtnNav />
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
        </article>
        <article>
              <div className={style.title}>
             <div className={style.name}>
               <h4 >EVENTS PHOTOGRAPHY</h4>
             </div>
             <div className={style.buttonNav}>
             <BtnNav />
             </div>
          </div>
          <div className={style.contener}>
              <div className={style.postPhoto}>
                  <img src={IMG4} />
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
                  <img src={IMG5} />
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
                  <img src={IMG6} />
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
        </article>
        <article>
              <div className={style.title}>
             <div className={style.name}>
               <h4 >EVENTS PHOTOGRAPHY</h4>
             </div>
             <div className={style.buttonNav}>
             <BtnNav />
             </div>
          </div>
          <div className={style.contener}>
              <div className={style.postPhoto}>
                  <img src={IMG7} />
                  <div className={style.imgPosit}>
                      <div className={style.titleImgPosit}>
                          <h4>COMMERCIAL PHOTOGRAPHY</h4>
                          <p>March 2022</p>
                      </div>
                      <button className={style.imgLink}>
                         VIEW PROJECT &#8599;
                      </button>
                  </div>
              </div>
              <div className={style.postPhoto}>
                  <img src={IMG8} />
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
                  <img src={IMG9} />
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
        </article>
    </content>
    );
}

export default SectionPhoto;