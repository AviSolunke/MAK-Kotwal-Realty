import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ContactPage from './ContactPage';

const Contact = () => {
  return (
    <>
 <Header/>
 
    <section className='c-wrapper'>
        <div className='paddings innerWidth flexCenter c-container'>
            {/* left side */}
            <div className='flexColStart c-left'>
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact Us</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you.
                 We believe a good blace to live can make your life beter!</span>

                 
                 <div className='flexColStart contactModes'>
                 {/* first row */}
                    <div className='flexStart row'>
                        <div className='flexColCenter mode'>
                           <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <MdCall size={25}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'>022 2492 2222</span>
                            </div>
                          </div>
                            <div className='flexCenter button'><a href='tel:"022 2492 2222"'>Call Now</a></div>
                        </div>

                        {/* second mode */}
                        <div className='flexColCenter mode'>
                           <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'>Chat</span>
                                <span className='secondaryText'>022 2492 2222</span>
                            </div>
                          </div>
                            <div className='flexCenter button'><a href='sms:"022 2492 2222"'>Chat Now</a></div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className='flexStart row'>
                        <div className='flexColCenter mode'>
                           <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'> Video Call</span>
                                <span className='secondaryText'>022 2492 2222</span>
                            </div>
                          </div>
                            <div className='flexCenter button'> <a href='tel:"022 2492 2222"'>Video Call Now</a></div>
                        </div>

                        {/* fourth mode */}
                        <div className='flexColCenter mode'>
                           <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'>Message</span>
                                <span className='secondaryText'>022 2492 2222</span>
                            </div>
                          </div>
                            <div className='flexCenter button'><a href='sms:"022 2492 2222"'>Message Now</a></div>
                        </div>
                    </div>
                    
                 </div>


            </div>
            {/* right side */}
            <div className='c-right'>
                <div className='image-container'>
                    <img src='./contact.jpg' alt='' />
                </div>
            </div>
        </div>
    </section>
    <div class="contact-map maps">
<iframe id="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5121457552254!2d72.82251031442348!3d18.997141059384195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce90b2232ce9%3A0xe3cefce8083ed231!2sMAK+Kotwal+Realty!5e0!3m2!1sen!2sin!4v1473245783120" width="100%" height="100%" frameborder="0" style={{ border: '0px', pointerEvents: 'none' }}
 allowfullscreen=""></iframe>
</div>
<Footer/>
    </>
  )
}

export default Contact;