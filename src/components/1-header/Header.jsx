import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  return (
    <header className="  flex">
      <button onClick={() => {
        setshowModal(true)
      }} className="menu icon-menu flex">    </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#contact">contact us</a>
          </li>
          <li>
            <a href="#testimonials">certifications</a>
          </li>
          <li>
            <a href="#footer">footer</a>
          </li>
          
        </ul>
      </nav>

      <button className="mode flex">
        <span className="icon-moon-o">  </span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li >
              <button className="icon-close" onClick={() => {
                setshowModal(false)
              }} />   
              
             
              
           
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">contact us</a>
            </li>
            <li>
              <a href="#testimonials">certifications</a>
            </li>
            <li>
              <a href="#footer">footer</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
