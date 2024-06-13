import "./Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import React, {useEffect} from "react";

function Home() {

    useEffect( () => {
        AOS.init();
    }, [])

    return (
      <section className="sobre">
        <div data-aos="fade-down"data-aos-anchor-placement="center-bottom"  data-aos-duration="1000" className="nome">
            <h3>Sou estudante apaixonado por tecnologia e design. Desde que comecei a explorar o mundo do desenvolvimento web, me dediquei a aprender e aplicar os princípios fundamentais da criação de interfaces de usuário dinâmicas e responsivas. Embora ainda não tenha experiência formal na indústria, tenho investido meu tempo em projetos pessoais e cursos online para aprimorar minhas habilidades.</h3>
        </div>

        <div className="experiencia">
            <h1 data-aos="fade-up"data-aos-anchor-placement="center-bottom"  data-aos-duration="1000">Expreriência</h1>

            <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"  data-aos-duration="1000" className="cardExperiencia">
                <h3>Técnico de suporte em TI | Infrawise</h3>
                <h4>Junho 2023 - Atualmente</h4>

                <p> <li>Responsável por dar assistência para o uso 
                    correto, a manutenção e a implementação 
                    de recursos tecnológicos nas 
                    organizações.</li> 
                </p>
            </div>

            <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className="cardExperiencia">
                <h3>Técnico de suporte em TI | Agion Tecnologia</h3>
                <h4>Dezembro 2021 - Abril 2023</h4>

                <p><li>Auxiliar nas atividades de suporte n°1, montagem, manutenção de computadores, instalação de programas.</li></p>
            </div>
        </div>

        <div className="Educacao">
            <h1 data-aos="fade-up"data-aos-anchor-placement="center-bottom"  data-aos-duration="1000">Educação</h1>
            <div data-aos="fade-up"data-aos-anchor-placement="center-bottom"  data-aos-duration="1000" className="cardEducacao">
                <h3>Desenvolvimento Front end | Pós Graduação | Cuiabá - MT</h3>
                <h4>Outubro 2023 - Fevereiro 2024</h4>

                <p><li>Universidade Anhanguera</li></p>
            </div>

            <div data-aos="fade-up"data-aos-anchor-placement="center-bottom"  data-aos-duration="1000" className="cardEducacao">
                <h3>Engenharia da computação | Bacharelado | Cuiabá - MT</h3>
                <h4>Fevereiro 2018 - Junho 2023</h4>

                <p><li>UNIC - Universidade de Cuiabá</li></p>
            </div>
        </div>
      </section>
    )
  }
  
  export default Home