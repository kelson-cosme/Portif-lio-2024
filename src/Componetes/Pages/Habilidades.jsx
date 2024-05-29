import "./Habilidades.css"
import css from "../../assets/css.png"
import figma from "../../assets/figma.png"
import firebase from "../../assets/firebase.png"
import github from "../../assets/github.png"
import html from "../../assets/html.png"
import js from "../../assets/js.png"
import photoshop from "../../assets/photoshop.png"
import react from "../../assets/react.png"

function Habilidade() {

    return (
      <section className="Habilidades">
        <p>Ao longo da tempo de estudo, adiquiri habilidades que me permite criar experiências digitais excepcionais. Com uma abordagem focada na inovação e na eficiência, estou sempre à procura de novas tecnologias e melhores práticas para entregar projetos em alta qualidade.</p>
      
        <ul className="tecHabilidades">
          <li><img src={html} alt="foto logo html" /></li>
          <li><img src={css} alt="foto logo html" /></li>
          <li><img src={js} alt="foto logo html" /></li>
          <li><img src={react} alt="foto logo html" /></li>
          <li><img src={photoshop} alt="foto logo html" /></li>
          <li><img src={figma} alt="foto logo html" /></li>
          <li><img src={github} alt="foto logo html" /></li>
          <li><img src={firebase} alt="foto logo html" /></li>

        </ul>
      
      </section>
    )
  }
  
  export default Habilidade