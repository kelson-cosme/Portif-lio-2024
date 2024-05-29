import { Link } from "react-router-dom"
import "./Contato.css"

function Contato() {

    return (
      <section className="contato">
        <ul className="infoContato">
          <li>
            <img src="" alt="" />
            <h2> <Link target="_blank" to={"https://wa.me/5565996646289"}>(65) 99664-6289</Link> </h2>
          </li>

          <li>
            <img src="" alt="" />
            <h2 ><Link to={"mailto:kelson.almeida123@gmail.com"}>kelson.almeida123@gmail.com</Link></h2>
          </li>

          <li>
            <img src="" alt="" />
            <h2 ><Link target="_blank" to={"https://github.com/kelson-cosme"}>github.com/kelson-cosme</Link></h2>
          </li>

          <li>
            <img src="" alt="" />
            <h2><Link target="_blank" to={"linkedin.com/in/kelson-cosme"}>linkedin.com/in/kelson-cosme</Link> </h2>
          </li>

          
        </ul>
      </section>
    )
  }
  
  export default Contato