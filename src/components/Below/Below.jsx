// import React from 'react';
// import About from '../About/About';
// import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
// import '../../components/Header/Header.css'
// import './Below.css'

// const Below = () => {
//   return (
//     <div className='below'>
//     <Header></Header>
//        <About/>
//        <Footer/>
//     </div>
//   );
// }

// export default Below;
// Below.js

import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../../components/Header/Header.css';
import './Below.css';

const Below = () => {
  return (
    <div className="below">
      <Header />
      <div className="content">
        <About />
        {/* Add other components or content here */}
      </div>
      <Footer />
    </div>
  );
};

export default Below;
