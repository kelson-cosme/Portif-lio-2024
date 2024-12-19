import Home from "../Home";
import Habilidade from "../Habilidades";
import Portifolio from "../Portifolio";
import Contato from "../Contato";

export const sections = [
  {
    id: "sobre",
    heading: "Sobre",
    sobre: <Home />,
  },
  {
    id: "habilidade",
    heading: "Habilidades",
    sobre: <Habilidade />,
  },
  {
    id: "portifolio",
    heading: "Portifólio",
    sobre: <Portifolio />,
  },
  {
    id: "contato",
    heading: "Contato",
    sobre: <Contato />,
  }
];
