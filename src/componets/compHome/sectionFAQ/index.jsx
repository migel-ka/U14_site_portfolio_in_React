import style from "./style.module.css";
import { Accordion } from "..//..//Accordion/index";
import { Accordion2 } from "..//..//Accordion/index";

const faqList = [
    { q: "What type of photography do you specialize in?",
     a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
 },
 { q: "How can I book a photography session with you?",
     a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
 },
 { q: "What equipment do you use for your photography?",
     a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
 },
 { q: "Can I request a specific location for a ",
     a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
 }
 ];
 
 const faqList_2 =[
 { q: "What is your editing process like?",
     a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
 },
 { q: "Are digital files included in your photography packages?",
     a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
 },
 { q: "Do you offer prints of your photographs?",
     a: "Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing"
 },
 { q: "How long does it take to receive the edited photos after a session?",
     a: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories"
 }
 ];
 

const Question = ()=> {
    return (
        <content>
        <div className={style.title}>
           <div className={style.name}>
             <h3>FAQ`S</h3>
             <h2>FREQUENTLY ASKED QUESTIONS</h2>
           </div>
           <div className={style.main}>
              <div className={style.accordion}>
                  <Accordion faqList={faqList} />
                  <Accordion2 faqList_2={faqList_2} />
              </div>
           </div>
       </div>
    </content>
    );
}

export default Question;