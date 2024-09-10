import style from "./style.module.css";
import Cards from "..//..//componets/cards/index";
import About from "./about/index";
import Journey from "./jour/index";

const AboutMe = ()=> {
    return (
        <content>
            <About />
            <Journey />
            <Cards />
        </content>
    );
}

export default AboutMe;