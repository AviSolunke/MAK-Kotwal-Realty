import React from 'react';
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import Countup from 'react-countup';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero-wrapper'>
       <div className='paddings innerWidth flexCenter hero-container'>
         <div className='flexColStart hero-left'>
               <div className=' hero-title'>
               <div className='orange-circle' />
                  <motion.h1
                  initial={{y: '2rem' , opacity:0}}
                  animate={{y:0 , opacity:1}}
                  transition={{
                    duration: 2,
                    type: 'spring'
                  }}
                  >We get <br /> you prices <br/>no one can match</motion.h1>
               </div>
               <div className='flexColStart hero-des'>
                  <span className='secondaryText'>We are good at parties but better at meetings. Try us!</span>
                  <span className='secondaryText'>You look like a client of great taste. We'll gel up well with you!</span>
               </div>
               <div className='flexCenter seeProj'>
                  {/* <HiLocationMarker color="var(--blue)" size={25} />
                  <input type='text' /> */}
                  <h3>See Our Projects </h3> 
                  <span>&rarr;</span>
                 <Link to='/projects'> <button className='button'>See Here</button></Link>
               </div>
               <div className='flexCenter stats'>
                   <div className='flexColCenter stat'>
                        <span>
                          <Countup  end={667} duaration={4}/>
                          <span>+</span>
                        </span>
                        <span className='secondaryText'>Our Inventory</span>
                   </div>
                   <div className='flexColCenter stat'>
                        <span>
                          <Countup  end={2704} duaration={4}/>
                          <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customer</span>
                   </div>
                   <div className='flexColCenter stat'>
                        <span>
                          <Countup  end={23} />
                          <span>+</span>
                        </span>
                        <span className='secondaryText'>Our Expertise</span>
                   </div>
               </div>
          </div>     
          {/* {right side }  */}
         <div className='flexCenter hero-right'>
              <motion.div
               initial={{x:'7rem',opacity:0}}
               animate={{x:0,opacity:1}}
               transition={{
                duration: 2,
                type: 'spring'
               }}
               className='image-container'>
                <img src='./hero.png' alt='' />
              </motion.div>
         </div>
       </div> 
    </section>
  )
}

export default Hero;