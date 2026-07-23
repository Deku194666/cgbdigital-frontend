import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar1 from "./components/Layout/NavBar1/NavBar1";
import NavBar2 from "./components/Layout/NavBar2/NavBar2";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./components/Home/Home";
import Servicios from "./components/Services/Servicios";
import DesarrolloSoftware from "./pages/DesarrolloSoftware/DesarrolloSoftware";
import AppsMoviles from "./pages/AppsMoviles/AppsMoviles";
import SistemasNube from "./pages/SistemasNube/SistemasNube";
import DesarrolloWeb from "./pages/DesarrolloWeb/DesarrolloWeb";
import AutomatizacionSoporte from "./pages/AutomatizacionSoporte/AutomatizacionSoporte";
import SolucionesIA from "./pages/SolucionesIA/SolucionesIA";
import ReparacionEquipos from "./pages/ReparacionEquipos/ReparacionEquipos";
import AdministracionRedes from "./pages/AdministracionRedes/AdministracionRedes";
import CiberseguridadBasica from "./pages/CiberseguridadBasica/CiberseguridadBasica";
import CapacitacionTecnologica from "./pages/CapacitacionTecnologica/CapacitacionTecnologica";
import MigracionDatos from "./pages/Migraciondatos/MigracionDatos";
import DisenoUxUi from "./pages/Disenouxui/DisenoUxUi";
import Projects from "./components/Home/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Nosotros from "./components/Nosotros/Nosotros";
import Clientes from "./components/Clientes/Clientes";
import Footer from "./components/Footer/Footer";
import TerminosDeServicio from "./pages/TerminosDeServicio";
import PoliticaDePrivacidad from "./pages/PoliticaDePrivacidad";
import PoliticaDeCookies from "./pages/PoliticaDeCookies";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import ClientDashboard from "./pages/ClientDashboard/ClientDashboard";

// Rutas "internas" (dentro de la cuenta) donde NO debe salir NavBar2
const INTERNAL_ROUTES = ["/admin", "/dashboard-cliente"];

function App() {
  const location = useLocation();
  const isInternalRoute = INTERNAL_ROUTES.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="App">
      {!isInternalRoute && <NavBar1 />}
      {!isInternalRoute && <NavBar2 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login"   element= { < Login />  }  />
        <Route path="register"  element= {< Register  />}  />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/proyects"  element={< Projects  />}  />
        <Route path="/contact"  element={ < Contact />  } />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/clientes"  element={ <  Clientes /> }  />
        <Route path="/servicios/desarrollo-software" element={<DesarrolloSoftware />} />
        <Route path="/servicios/apps-moviles" element={<AppsMoviles />} />
        <Route path="/servicios/sistemas-nube" element={<SistemasNube />} />
        <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
        <Route path="/servicios/automatizacion-soporte" element={<AutomatizacionSoporte />} />
        <Route path="/servicios/soluciones-ia" element={<SolucionesIA />} />
        <Route path="/servicios/reparacion-equipos" element={<ReparacionEquipos />} />
        <Route path="/servicios/administracion-redes" element={<AdministracionRedes />} /> 
        <Route path="/servicios/ciberseguridad-basica" element={<CiberseguridadBasica />} /> 
        <Route path="/servicios/capacitacion-tecnologica" element={<CapacitacionTecnologica />} />
        <Route path="/servicios/migracion-datos" element={<MigracionDatos />} />
        <Route path="/servicios/diseno-ux-ui" element={<DisenoUxUi />} />
        <Route path="/terminos-de-servicio" element={<TerminosDeServicio />} />
        <Route path="/politica-de-privacidad" element={<PoliticaDePrivacidad />} />
        <Route path="/politica-de-cookies" element={<PoliticaDeCookies />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dashboard-cliente" element={<ClientDashboard />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;