import style from "./style.module.css";
import BANER from "..//..//..//assets/portf/baner.png";


const SectionMainPort = ()=> {
    return (
       <content >
        <div className={style.contener}>
            <img src={BANER} />
            <div className={style.title}>
                <h3>PORTFOLIO</h3>
                <h2>VISUAL POETRY IN PIXELS</h2>
                <p> Step into a visual journey that encapsulates the essence of my lens. Each photograph in this portfolio is a narrative, a frozen moment in time, and a testament to the artistry and passion poured into every frame. Explore the diverse tapestry of stories I've had the privilege to capture and witness the world through my lens.</p>
            </div>
              <svg className={style.svgimg} width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M68.4996 23.3802L74.8805 62.1191L113.619 68.5L74.8805 74.8809L68.4996 113.62L62.1187 74.8809L23.3799 68.5L62.1187 62.1191L68.4996 23.3802Z" fill="#2F2F37"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M68.5 135.359C105.425 135.359 135.359 105.425 135.359 68.5C135.359 31.5746 105.425 1.64072 68.5 1.64072C31.5746 1.64072 1.64072 31.5746 1.64072 68.5C1.64072 105.425 31.5746 135.359 68.5 135.359ZM68.5 137C106.332 137 137 106.332 137 68.5C137 30.6685 106.332 0 68.5 0C30.6685 0 0 30.6685 0 68.5C0 106.332 30.6685 137 68.5 137Z" fill="#2F2F37"/>
              </svg>
              <div className={style.titletext}>
              SCROLL DOWN TO SEE<br /> MY JOURNEY
              </div>
        </div>
         
        
       </content>

    );
}

export default SectionMainPort;