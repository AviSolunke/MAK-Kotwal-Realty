import React from 'react';

import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Companies from "../Companies/Companies";
import Residencies from "../Residencies/Residencies";

import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer" 
const Main = () => {
  return (
    <div>
       <div className="App">
        <div>
          <div className="white-gradient"/>
          <Header />
          <Hero />
        </div>
        <Companies />
        <Residencies />
    
        <Footer />
      </div>
    </div>
  );
}

export default Main;

// import React from 'react';

// import Header from "../Header/Header";
// import Hero from "../Hero/Hero";
// import Companies from "../Companies/Companies";
// import Residencies from "../Residencies/Residencies";
// import Value from "../Value/Value";
// import Contact from "../Contact/Contact";
// import Footer from "../Footer/Footer" 

// const mainPage = () => {
//   return (
//     <div>
//     <div className="App">
//         <div>
//           <div className="white-gradient"/>
//           <Header />
//           <Hero />
//         </div>
//         <Companies />
//         <Residencies />
//         <Value />
//         <Contact />
//         <Footer />
//       </div>

//       mainPage
      
//     </div>
//   );
// }

// export default mainPage;
