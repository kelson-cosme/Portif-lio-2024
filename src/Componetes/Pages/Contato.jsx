import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

import { Link } from "react-router-dom"
import "./Contato.css"


function Contato() {

  useEffect( () => {
    AOS.init();
}, [])

    return (
      <section className="contato">
        <ul className="infoContato">
          <li data-aos="fade-up-right" data-aos-duration="1500">
            <img src="" alt="" />
            <h2> <Link target="_blank" to={"https://wa.me/5565996646289"}>(65) 99664-6289</Link> </h2>
          </li>

          <li data-aos="fade-up-left" data-aos-duration="1500">
            <img src="" alt="" />
            <h2 ><Link to={"mailto:kelson.almeida123@gmail.com"}>kelson.almeida123@gmail.com</Link></h2>
          </li>

          <li data-aos="fade-up-right" data-aos-duration="1500">
            <img src="" alt="" />
            <h2 ><Link target="_blank" to={"https://github.com/kelson-cosme"}>github.com/kelson-cosme</Link></h2>
          </li>

          <li data-aos="fade-up-left" data-aos-duration="1500">
            <img src="" alt="" />
            <h2><Link target="_blank" to={"linkedin.com/in/kelson-cosme"}>linkedin.com/in/kelson-cosme</Link> </h2>
          </li>

          
        </ul>
      </section>
    )
  }
  
  export default Contato