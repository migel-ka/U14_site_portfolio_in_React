import BANER from "..//..//..//assets/about/image.png";
import style from "./style.module.css";

const About = ()=> {
    return (
        <div>
            <div className={style.contener}>
              <img class src={BANER} />
              <div className={style.title}>
                <h3>ABOUT</h3>
                <h2>ABOUT DAMIEN BRAUN</h2>
              </div>
              <div className={style.titleblocks}>
                <div className={style.titleblock}>
                    <h5>15+</h5>
                    <p>Years in Business</p>
                </div>
                <div className={style.titleblock}>
                    <h5>500+</h5>
                    <p>Happy Clients</p>
                </div>
                <div className={style.titleblock}>
                    <h5>10+</h5>
                    <p>Photography Awards</p>
                </div>
                <div className={style.titleblock}>
                    <h5>05+</h5>
                    <p>International Shoots</p>
                </div>
                <div className={style.titleblock}>
                    <h5>10,000+</h5>
                    <p>Social Media Followers</p>
                </div>
                <div className={style.titleblock}>
                    <h5>90%</h5>
                    <p>Client Retention Rate</p>
                </div>
              </div>
              <svg className={style.svgimg} width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M68.4996 23.3802L74.8805 62.1191L113.619 68.5L74.8805 74.8809L68.4996 113.62L62.1187 74.8809L23.3799 68.5L62.1187 62.1191L68.4996 23.3802Z" fill="#2F2F37"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M68.5 135.359C105.425 135.359 135.359 105.425 135.359 68.5C135.359 31.5746 105.425 1.64072 68.5 1.64072C31.5746 1.64072 1.64072 31.5746 1.64072 68.5C1.64072 105.425 31.5746 135.359 68.5 135.359ZM68.5 137C106.332 137 137 106.332 137 68.5C137 30.6685 106.332 0 68.5 0C30.6685 0 0 30.6685 0 68.5C0 106.332 30.6685 137 68.5 137Z" fill="#2F2F37"/>
              </svg>
              <div className={style.titletext}>
              SCROLL DOWN TO SEE<br /> MY JOURNEY
              </div>
              <div>
                <h3> MY BIOGRAPHY</h3>
                  <p>Damien Braun's love affair with photography began at a young age, nurtured by the captivating landscapes and vibrant cultures surrounding her in the heart of the USA. Her passion for storytelling through imagery led her to embark on a photography journey that has spanned over 15 years. <br />
                     Driven by an insatiable curiosity to explore the beauty in everyday moments, Damien has honed her craft meticulously. Her background in digital media provided her with a solid foundation, but it's her keen eye for detail and an innate ability to capture raw emotions that truly set her apart. <br />
                     Damien's journey is more than just taking pictures; it's about capturing the essence of the human spirit, the fleeting magic of nature, and the emotions that define our lives. With each click of her camera, she weaves stories that transcend time and space.
                  </p>
            </div>
            </div>
            
        </div>

    );
}

export default About;