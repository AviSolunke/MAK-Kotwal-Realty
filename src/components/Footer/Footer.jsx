import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'
const Footer = () => {
  return (
     <section className='f-wrapper'>
        <div className=' footi paddings innerWidth flexCenter f-container'>
            {/* left */}
            <div className='flexColStart f-left'>
                <Link to='/'><img src='./logo.png' alt='' width={120} /></Link>
                <span className='secondaryText'>
                    Our vision is to make all pepople <br />
                    the best place to live fot them.
                </span>
            </div>
            {/* right */}
            <div className='flexColStart f-right'>
                <span className='primaryText'>Address</span>
                <span className='secondaryText'>705, Marathon Icon,
Ganpatrao Kadam Marg, Lower Parel,
Mumbai, Maharashtra - 400013</span>
{/* //                  <div className='flexCenter f-menu'>
//                     <span>Property</span>
//                     <span>Services</span>
//                     <span>Product</span>
//                     <span>About Us</span>
//                  </div> */}
<div className="social-media" style={{paddingTop:'18px'}}>

  <SocialIcon url="https://facebook.com"  target="_blank" href="https://www.facebook.com/makkotwalrealty/"  style={{ height: 30, width: 30, margin: '0 10px' }} />

  <SocialIcon url="https://youtube.com" href="https://www.youtube.com/user/MAKKotwalRealty" target="_blank"  style={{ height: 30, width: 30, margin: '0 10px' }} />

<SocialIcon url="https://instagram.com" href="https://www.instagram.com/makkotwalrealty/" target="_blank"  style={{ height: 30, width: 30, margin: '0 10px' }} />

  <SocialIcon url="https://linkedin.com" href="https://www.linkedin.com/company/mak-kotwal-realty/about/" target='_blank'  style={{ height: 30, width: 30, margin: '0 10px' }}/>


</div>
  <div className="copyright">
        <p>&copy; {new Date().getFullYear()} MAK Kotwal Realty. All Rights Reserved.</p>
     </div>
            </div>
            
        </div>
      
     </section>
  )
}

 export default Footer;
// import React from 'react';

// //import { FaFacebook, FaTwitter, FaLinkedIn, FaInstagram } from 'react-icons/fa';
// import { SocialIcon } from 'react-social-icons'

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="company-info">
//           <img src="/company-logo.png" alt="Company Logo" className="company-logo" />
//           <p>
//             Your Company Name<br />
//             Address Line 1, Address Line 2<br />
//             City, State, Zip Code<br />
//             Phone: (123) 456-7890<br />
//             Email: info@company.com
//           </p>
//         </div>

//         <div className="social-media">
//           <a href="#" target="_blank" rel="noopener noreferrer">
//             {/* <FaFacebook size={30} /> */}
//             <SocialIcon url="https://facebook.com"  style={{ height: 30, width: 30, margin: '0 10px' }} />
//           </a>
//           <a href="#" target="_blank" rel="noopener noreferrer">
//             {/* <FaTwitter size={30} /> */}
//             <SocialIcon url="https://twitter.com"  style={{ height: 30, width: 30, margin: '0 10px' }} />
//           </a>
//           <a href="#" target="_blank" rel="noopener noreferrer">
//           <SocialIcon url="https://instagram.com"  style={{ height: 30, width: 30, margin: '0 10px' }} />
//           </a>
//           <a href="#" target="_blank" rel="noopener noreferrer">
//             {/* <FaInstagram size={30} /> */}
//             <SocialIcon url="https://linkedin.com"  style={{ height: 30, width: 30, margin: '0 10px' }}/>
//           </a>
          
//         </div>
//       </div>

//       <div className="copyright">
//         <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

