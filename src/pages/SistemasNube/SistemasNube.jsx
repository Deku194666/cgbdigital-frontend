



import React from "react";
import "./SistemasNube.css";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import { sistemasNube } from "../../pages/data/servicesDetail";

const SistemasNube = () => {
  return <ServiceDetail data={sistemasNube} />;
};

export default SistemasNube;