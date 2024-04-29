import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Testimonials from "./components/5-testimonials/testimonials.jsx"
import Footer from "./components/6-footer/Footer";

function App() { 

  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Testimonials />
      <div className="divider"></div>
      <Footer />

    <a href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
    </a>
    </div>
  );
}
  
export default App;
