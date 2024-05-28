import "./Portifolio.css";
import { useState } from "react";

function Portifolio() {
  const dados = [
    { id: 0, titulo: "Kelson", foto: "imagens", descricao: "dadaposodskmdpoadkspok" },
    { id: 1, titulo: "teste2", foto: "imagens", descricao: "esse é o teste 2" },
    { id: 2, titulo: "teste3", foto: "imagens", descricao: "esse é o teste 3" }
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
      <div className="projetos">
        {dados.map((projetos) => (
          <div key={projetos.id} id={projetos.id} onClick={cliclou}>
            {projetos.titulo}
          </div>
        ))}
      </div>
        
      <div id="cardDetalhes" style={{ display: idCard !== null ? "block" : "none" }}> {/* se id for igual Null então ira aplicar o estilo do display none */}
        {idCard !== null && (
          <>
            <h1>{dados[idCard].titulo}</h1>
            <button onClick={fechar}>Fechar</button>
          </>
        )}
      </div>
    </section>
  );
}

export default Portifolio;