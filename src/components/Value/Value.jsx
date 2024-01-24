import React, { useState } from 'react';
import {Accordion, 
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Value = () => {
    const [className, setClassName]= useState(null);
  return (
    <>
 <Header/>
   
    <section className='v-wrapper'>
       <div className='paddings innerWidth flexCenter v-container'>
           {/* left side */}
           <div className='v-left'>
                <div className='image-container'>
                    <img src='./value.png' alt='' />
                 </div>
           </div>

           {/* right side */}
           <div className='flexColStart v-right'>
               <span className='orangeText'>Our Value</span>
               <span className='primaryText'>Value We Give to You</span>
               <span className='secondaryText'>
               Access to more than 80 projects across South Central Mumbai. After all choices matters the most!
               <br/>Our guidance, advice and services comes to you for free as we follow a no brokerage policy.
               </span>

               <Accordion 
               className='accordion'
               allowMultipleExpanded={false}
               preExpanded={[0]}
               >
                {
                    data.map((item,i)=>{
                        
                        return(
                            <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                              <AccordionItemHeading>
                                <AccordionItemButton className='flexCenter accordionButton'>
                                <AccordionItemState>
                                    {({expanded})=>expanded ? setClassName('expanded') : setClassName('collapsed')}
                                </AccordionItemState>
                                    <div className='flexCenter icon'>{item.icon}</div>
                                    <span className='primaryText'>{item.heading}</span>
                                    <div className='flexCenter icon'>
                                        <MdOutlineArrowDropDown size={20} />
                                    </div>
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                 <p className='secondaryText'>{item.detail}</p>
                              </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })

                } 
               </Accordion>
           </div>
       </div>
    </section>
    <Footer/>
    </>
  )
}

export default Value;