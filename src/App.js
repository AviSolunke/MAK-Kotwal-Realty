import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import './App.css';
import Residencial from "./components/Projects/Residencial";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Below from "./components/Below/Below";
import Project from "./components/Projects/Project";
import Career from "./components/Career/Career";
import Commercial from "./components/Projects/Commercial";

function App() {
  return (
    <>
 
<Router>
      
    <Routes>
    <Route path = '/' element={<Main/>}></Route>
    <Route path="/about" element={<Below />}></Route>
    <Route path="/projects" element={<Project />}></Route>
    <Route path="/career" element={<Career />}></Route>
    <Route path="/value" element={<Value />}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/residential" element={<Residencial/>}></Route>
    <Route path="/commercial" element={<Commercial/>}></Route>
      </Routes>
    </Router>


    </>
    
  );
}

export default App;
























// import React from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import Companies from "./components/Companies/Companies";
// import './App.css';
// import Residencies from "./components/Residencies/Residencies";
// import Value from "./components/Value/Value";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";

// function App() {
//   return (
//     <Router>

//     <Routes>


      
//     </Routes>


      // <div className="App">
      //   <div>
      //     <div className="white-gradient"/>
      //     <Header />
      //     <Hero />
      //   </div>
      //   <Companies />
      //   <Residencies />
      //   <Value />
      //   <Contact />
      //   <Footer />
      // </div>
//     </Router>
//   );
// }

// export default App;



