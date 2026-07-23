

import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./DesarrolloWeb.css";
import { desarrolloWeb } from "../../pages/data/servicesDetail";

const DesarrolloWeb = () => {
  return <ServiceDetail data={desarrolloWeb} />;
};

export default DesarrolloWeb;