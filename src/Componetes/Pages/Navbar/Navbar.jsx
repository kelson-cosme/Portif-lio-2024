import { Link } from "react-router-dom"

import Foto from "../../../assets/foto.png"
import "../Navbar/Navbar.css"

function Navbar() {

    return (
        <header>
            <div className="fotoPerfil">
                <div className="rosto">
                    <img src={Foto} alt="" />
                </div>
            
                <h1>Kelson Cosme</h1>
                <p>Desenvolvedor Front-end</p>

                <ul className="redesSociais">
                    <li>facebook</li>
                    <li>facebook</li>
                    <li>facebook</li>
                    <li>facebook</li>
                </ul>
            </div>

            <nav className="navegacao">
                <Link to={"/"}><li className="sobreLink">Sobre</li></Link>
                <Link to={"/portifolio"}><li> Portifólio</li></Link>
                <Link to={"/habilidades"}> <li>Habilidades</li></Link> 
                <Link to={"/contato"}><li>Contato</li></Link> 
            </nav>
            


        </header>
    )
  }
  
  export default Navbar