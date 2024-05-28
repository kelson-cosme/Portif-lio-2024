import "./Home.css"

function Home() {

    return (
      <section className="sobre">,
      
        <div className="nome">
            <h3>Meu nome é [Seu Nome] e sou [sua profissão], apaixonado por [sua área de especialização]. Ao longo da minha carreira, desenvolvi uma vasta experiência em [área(s) de atuação], sempre buscando inovar e aperfeiçoar minhas habilidades.</h3>
        </div>

        <div className="experiencia">
            <h1>Expreriência</h1>

            <div className="cardExperiencia">
                <h3>Técnico de suporte em TI | Agion Tecnologia</h3>
                <h4>Dezembro 2021 - Abril 2023</h4>

                <p>Auxiliar nas atividades de suporte n°1, montagem, manutenção de computadores, instalação de programas.</p>
            </div>

            <div className="cardExperiencia">
                <h3>Técnico de suporte em TI | Agion Tecnologia</h3>
                <h4>Dezembro 2021 - Abril 2023</h4>

                <p>Auxiliar nas atividades de suporte n°1, montagem, manutenção de computadores, instalação de programas.</p>
            </div>
        </div>

        <div className="Educacao">
            <h1>Educação</h1>
            <div className="cardEducacao">
                <h3>Técnico de suporte em TI | Agion Tecnologia</h3>
                <h4>Dezembro 2021 - Abril 2023</h4>

                <p>Auxiliar nas atividades de suporte n°1, montagem, manutenção de computadores, instalação de programas.</p>
            </div>
        </div>
      </section>
    )
  }
  
  export default Home