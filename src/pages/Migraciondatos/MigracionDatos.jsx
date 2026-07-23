


import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./MigracionDatos.css";
import { migracionDatos } from "../data/servicesDetail";

const MigracionDatos = () => {
  return <ServiceDetail data={migracionDatos} />;
};

export default MigracionDatos;