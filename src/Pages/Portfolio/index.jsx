import Cards from "..//..//componets/cards/index";
import Question from "../../componets/compHome/sectionFAQ";
import SectionMainPort from "..//Portfolio/SectionMainPort/index";
import TAB from "..//..//assets/portf/SubContainer.png";
import SectionPhoto from "./SectionPhoto/index";

const Portfolio = ()=> {
    return (
       <content>
        <SectionMainPort />
        <img src={TAB} />
        <SectionPhoto />
        <Question />
        <Cards />
       </content>

    );
}

export default Portfolio;