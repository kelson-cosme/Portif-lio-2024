import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import "./Portifolio.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Alpha from "../../assets/alpha.jpg"
import CodNFT from "../../assets/codnft.jpg"
import Capivara from "../../assets/capivara.jpg"
import sistemaNotas from "../../assets/sistemaNotas.png"
import gerenciadorPosts from "../../assets/nosso-blog.png"


function Portifolio() {

  useEffect( () => {
    AOS.init();
}, [])


  const dados = [
    { id: 0, titulo: "Alpha AK", imagem: Alpha, descricao: "Ladding page", funcionabilidade: ["Site Responsivo", "Menu mobile"] , tecologia: ["React Js", "Vite"], site: "https://alpha-ak.vercel.app"},
    { id: 1, titulo: "Capivara-TV", imagem: Capivara, descricao: "Site para assistir seu filmes", funcionabilidade: ["Uso da API TMDB para pegar os dados dos filmes", "Uso da API SuperFlix para ter acesso aos filmes (uso de apenas para estudo)"] ,tecologia: ["React Js", "Vite", "Swiper"], site: "https://capivara-tv.vercel.app"},
    { id: 2, titulo: "CodeNFT", imagem: CodNFT, descricao: "Ladding page" , funcionabilidade: ["Site Responsivo"] ,tecologia: ["React Js", "Vite"], site: "https://codnft.vercel.app"},
    { id: 3, titulo: "Sistema de Notas", imagem: sistemaNotas, descricao: "Sistema onde armazena 4 notas de alunos" , funcionabilidade: ["Criar novo cadastro de alunos", "Editar", "Excluir"] ,tecologia: ["React Js", "Firebase", "React Roter Dom"], site: "https://sistema-notas.netlify.app"},
    { id: 4, titulo: "Gerenciador de Posts", imagem: gerenciadorPosts, descricao: "Painel Administrativo construído com ReactJs e Firebase. Ele permite que um administrador gerencie posts, incluindo a criação, edição e exclusão de posts." , funcionabilidade: ["Autenticação de Usuário", "Visualizar, Criar, Editar e Excluir Posts", "Atualizações em Tempo Real"] ,tecologia: ["React Js", "Firebase", "Css"], site: "https://blog2-0-chi.vercel.app/"}

 
  ];

  const [idCard, setIdCard] = useState(null);


  function fechar() {
    setIdCard(null);
  }

  function cliclou(event) {
    const clickId = event.target.id; // pegar o id do card
    if (clickId !== undefined) {
      setIdCard(clickId);
    }
  }

  return (

    
    <section className="portifolio">
      <div  className="projetos">
        {dados.map((projetos) => (
          <div className="projetosPai" data-aos="zoom-in-down" data-aos-duration="1500"  key={projetos.id} id={projetos.id} onClick={cliclou}  style={{backgroundImage: `url("${projetos.imagem}")`}}>

            <div id={projetos.id} className="projetosTitulo"> {projetos.titulo}</div>

          </div>
        ))}
      </div>
        

        
      <div id="cardDetalhes" style={{ transform: idCard !== null ? "translateY(0)" : "translateY(100%)", opacity: idCard !== null ? "1" : "0", zIndex: idCard !== null ? "9999" : "0"}}> {/* se id for igual Null então ira aplicar o estilo do display none */}
        {idCard !== null && (
          <>
            <div className="imgCard">
              <img src={dados[idCard].imagem} alt="" />
              <iframe src={dados[idCard].site} frameborder="0"></iframe>
            </div>

            <div className="dadosProjetos">
              <h1>{dados[idCard].titulo}</h1>
              <p>{dados[idCard].descricao}</p>

              <h1>Funcionabilidade</h1>
              <ul className="funcionabilidade">
                {dados[idCard].funcionabilidade.map ((func, index) => (
                    <li key={index}>{func}</li>  
                ))}
              </ul>


              <h1>Tecnologias</h1>
              <ul className="tecnologia">
              {dados[idCard].tecologia.map ((tec, index) => (
                    <li key={index}>{tec}</li>  
                ))}
              </ul>

              <h1>Links</h1>
              <div className="links" >
                <Link target="_blank" to={dados[idCard].site}>Deploy</Link> <br/>
              </div>

            </div>

            <div className="botao" onClick={fechar}>
                fechar
            </div>


          </>
        )}
      </div>

      <div className="foraPagina" style={{ display: idCard !== null ? "block" : "none"}} onClick={fechar}></div>
    </section>
  );
}

export default Portifolio;