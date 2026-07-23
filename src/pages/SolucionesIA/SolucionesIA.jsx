


import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./SolucionesIA.css";
import { solucionesIA } from "../../pages/data/servicesDetail";

const SolucionesIA = () => {
  return <ServiceDetail data={solucionesIA} />;
};

export default SolucionesIA;