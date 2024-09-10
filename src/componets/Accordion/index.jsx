import React, {useState} from 'react';
import { AccordionItem } from './Accordionitem';
import { AccordionItem2 } from './Accordionitem';
import  "./index.css";

export const Accordion = ({faqList}) => {
    const [openId, setId] = useState(null);

  return (
    <ul className='accordion'>
        {faqList.map((faqItem, id) => {
          return (<AccordionItem
           onClick={() => (id === openId ? setId(null) : setId(id))}
           faqItem={faqItem}
            isOpen={id === openId}
             key={id} />
          );
        })}
            </ul>
    
  );
};
export const Accordion2 = ({faqList_2}) => {
    const [openId, setId] = useState(null);

  return (
    <ul className='accordion'>

        {faqList_2.map((faqItem, id) => {
                return (<AccordionItem2
                onClick={() => (id === openId ? setId(null) : setId(id))}
                faqItem={faqItem}
                    isOpen={id === openId}
                    key={id} />
                );
                })}
            </ul>
    
  );
};
