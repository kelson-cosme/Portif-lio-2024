import { Link } from "react-router-dom"

import Foto from "../../../assets/foto.png"
import "../Navbar/Navbar.css"

import whatsapp from "../../../assets/whatsapp.png"
import instagram from "../../../assets/instagram.png"


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
                    <li><Link target="_blank" to={"https://wa.me/5565996646289"}> <img src={whatsapp} alt="" /> </Link> </li>
                    <li><Link target="_blank" to={"https://instagram.com/kelson.almeida"}><img src={instagram} alt="" /></Link></li>
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