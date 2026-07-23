

import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./AutomatizacionSoporte.css";
import { automatizacionSoporte } from "../../pages/data/servicesDetail";

const AutomatizacionSoporte = () => {
  return <ServiceDetail data={automatizacionSoporte} />;
};

export default AutomatizacionSoporte;