


import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./AdministracionRedes.css";
import { administracionRedes } from "../../pages/data/servicesDetail";

const AdministracionRedes = () => {
  return <ServiceDetail data={administracionRedes} />;
};

export default AdministracionRedes;