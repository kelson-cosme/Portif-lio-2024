import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"
import Habilidades from "../Pages/Habilidades"
import Contato from "../Pages/Contato"
import Portifolio from "../Pages/Portifolio"

import Navbar from "../Pages/Navbar/Navbar";

function Rotas() {

  return (
    <>
        <BrowserRouter>
          <Navbar/>

            <Routes>
                {/* <Route path="/" element={<Home/>} /> */}
                <Route path="/portifolio" element={<Portifolio/>} />
                <Route path="/habilidades" element={<Habilidades/>} />
                <Route path="/contato" element={<Contato/>} />

            </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default Rotas
