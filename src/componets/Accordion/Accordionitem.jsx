import React, { useRef } from 'react';
import Aicon from "../../assets/Alcon.svg";

export const AccordionItem = ({ faqItem, onClick, isOpen }) => {
    const itemRef = useRef(null);

    return (
        <li className="accordion-item">
            <button className="accordion-header" onClick={() => onClick()}>
                {faqItem.q}
                <img className={`accordion-arrow ${isOpen ? "active" : ""}`} src={Aicon} alt="" />
            </button>
            <div className="accordion-collapse" style={
                isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
            }>

                <div className="accordion-body" ref={itemRef}>{faqItem.a}</div>
            </div>

        </li>);
}
export const AccordionItem2 = ({ faqItem, onClick, isOpen }) => {
    const itemRef = useRef(null);

    return (
        <li className="accordion-item-right">
            <button className="accordion-header" onClick={() => onClick()}>
                {faqItem.q}
                <img className={`accordion-arrow ${isOpen ? "active" : ""}`} src={Aicon} alt="" />
            </button>
            <div className="accordion-collapse" style={
                isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
            }>

                <div className="accordion-body" ref={itemRef}>{faqItem.a}</div>
            </div>

        </li>);
}