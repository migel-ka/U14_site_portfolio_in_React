import PortPhoto from "./SectionPhotography/PortPhoto/index";
import SectionMainServ from "./SectionMainServ";
import EventyPhoto from "./SectionPhotography/EventyPhoto/index";
import ComPhoto from "./SectionPhotography/ComPhoto/index";

const SectionPhotography = ()=> {
    return (
        <content>
            <SectionMainServ />
            <PortPhoto />
            <EventyPhoto />
            <ComPhoto />
        </content>

    );
}

export default SectionPhotography;