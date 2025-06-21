/*//Clase 1
import learning from "./assets/learning.svg";
import CertificaTusConocimientos from "./Clase1/CertificaTusConocimientos";
import GarantiaDeAprendizaje from "./Clase1/GarantiaDeAprendizaje";
import Header from "./Clase1/Header";
import Logo from "./Clase1/Logo";
import PlataformaAlumni from "./Clase1/PlataformaAlumni";

function App() {
  return (
    <>
      <Logo />
      <Header />
      <CertificaTusConocimientos />
      <GarantiaDeAprendizaje />
      <PlataformaAlumni />
    </>
  );
} */


/* // Clase 2
import Renderizacion from "./Clase2/Renderizacion";
import Props from "./Clase2/Props";
import States from "./Clase2/States";
import Eventos from "./Clase2/Eventos";
import CicloDeVida from "./Clase2/CicloDeVida";
import { useState } from "react";
import Desafio1 from "./Clase2/Desafios/Desafio1";
import Desafio2 from "./Clase2/Desafios/Desafio2";

function App() {
  // // Desmotaje de componente 
  // const [visible, setVisible] = useState(true);
  // const desmontarComponente = () => {
  //   setVisible(false);
  // }

  return (
    <>
      {// <Renderizacion /> }
      {// <Props texto1={"Hola"} texto2={"como estas?"} edad={30} />}
      {// <States/> }
      {// <Eventos/> }
      {// <CicloDeVida />
      <h2>Desmotaje de Componente</h2>
      {visible ? <CicloDeVida /> : ""}
      <button className="btn btn-secondary" onClick={desmontarComponente}>Desmontar Componente</button> }
      {// <Desafio1/> }
      {// <Desafio2/> }
    </>
  );
}*/

/*// Clase 3
import Calculator from "./Clase3/Calculator";
import Formularios from "./Clase3/Formularios";
import Renderizado from "./Clase3/Renderizado";

function App() {
  return (
    <>
      {<Calculator />}
      { <Formularios/>}
      <Renderizado/>
    </>
  );
}
export default App;*/


//Clase 4 - Routing
import EnFamilia from "./Clase4/EnFamilia.jsx"
import Error404 from "./Clase4/Error404.jsx"
import NavBar from "./Clase4/NavBar.jsx"
import Producto from "./Clase4/Producto.jsx"
import Productos from "./Clase4/Productos.jsx"
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom"
function App() {

  // const routes = useRoutes([
  //   {
  //     path: "/",
  //     element: <Productos />
  //   },
  //   {
  //     path: "/productos",
  //     element: <Productos />
  //   },
  //   {
  //     path: "/productos/:id",
  //     element: <Productos />
  //   },
  //   {
  //     path: "/en-familia",
  //     element: <EnFamilia />
  //   }
  // ]);

  // return (
  //   <>
  //     <NavBar />
  //     {routes}
  //   </>
  // )

  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<Productos />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/en-familia/" element={<EnFamilia />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}
export default App;