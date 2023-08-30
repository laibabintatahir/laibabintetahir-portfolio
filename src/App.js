import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualifications from "./components/qualifications/Qualifications";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scroll/Scroll";
import Work from "./components/work/Work";
import Testimonial from "./components/testimonial/Testominal";
import Data from "./components/testimonial/Data";
function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Work />
        <Testimonial data={Data} />
        <Contact />
      </main>
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
