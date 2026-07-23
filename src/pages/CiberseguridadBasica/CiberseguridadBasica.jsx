




import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./CiberseguridadBasica.css";
import { ciberseguridadBasica } from "../../pages/data/servicesDetail";

const CiberseguridadBasica = () => {
  return <ServiceDetail data={ciberseguridadBasica} />;
};

export default CiberseguridadBasica;