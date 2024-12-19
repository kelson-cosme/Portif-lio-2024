// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// import { useEffect } from 'react';

// import { Link } from "react-router-dom"

// import Foto from "../../../assets/foto.png"
// import "../Navbar/Navbar.css"

// import whatsapp from "../../../assets/whatsapp.png"
// import instagram from "../../../assets/instagram.png"


// function Navbar() {

//     useEffect( () => {
//         AOS.init();
//     }, [])

//     return (


//         <header>
//             <div className="fotoPerfil">
//                 <div data-aos="fade-up" className="rosto">
//                     <img src={Foto} alt="" />
//                 </div>

//                 <div data-aos="fade-left">
//                     <h1>Kelson Cosme</h1>
//                     <p>Desenvolvedor Front-end</p>
//                 </div>
                

//                 <ul className="redesSociais">
//                     <li data-aos="zoom-in"><Link target="_blank" to={"https://wa.me/5565996646289"}> <img src={whatsapp} alt="" /> </Link> </li>
//                     <li data-aos="zoom-in"><Link target="_blank" to={"https://instagram.com/kelson.almeida"}><img src={instagram} alt="" /></Link></li>
//                 </ul>
//             </div>

//             <nav data-aos="fade-right" className="navegacao">
//                 <Link to={"/"}><li className="sobreLink">Sobre</li></Link>
//                 <Link to={"/portifolio"}><li> Portifólio</li></Link>
//                 <Link to={"/habilidades"}> <li>Habilidades</li></Link> 
//                 <Link to={"/contato"}><li>Contato</li></Link> 
//             </nav>
            


//         </header>
//     )
//   }
  
//   export default Navbar

import { useState } from "react";
import { motion } from "framer-motion";

import Section from "./Section";
import { sections } from "./content.jsx";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("html");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // Track clicks to disable observer temporarily

  return (
    <>
      <nav
        className="
          fixed z-[9999] top-4 left-1/2 -translate-x-1/2
          px-3 py-2 rounded-full border border-white border-opacity-[.08]
          bg-white bg-opacity-[.08] backdrop-blur-lg 
        "
      >
        <ul
          className="
            flex justify-center items-center gap-2 
            font-medium text-white
          "
        >
          {sections.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                  setActiveSection(link.id);
                }}
                className="relative text-sm py-2 px-4 tracking-wide inline-block"
              >
                {link.heading}

                {activeSection === link.id && (
                  <motion.div
                    layoutId="bubble"
                    className="
                      absolute inset-0 -z-10
                      bg-purple-900 rounded-full 
                    "
                    transition={{ type: "spring", duration: 0.6 }}
                  ></motion.div>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {sections.map((section) => (
        <Section
          key={section.id}
          setActiveSection={setActiveSection}
          section={section}
          timeOfLastClick={timeOfLastClick}
        />
      ))}
    </>
  );
};

export default Navbar;
