



import React from "react";
import "./DesarrolloSoftware.css";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import { desarrolloSoftware } from "../../pages/data/servicesDetail";

const DesarrolloSoftware = () => {
  return <ServiceDetail data={desarrolloSoftware} />;
};

export default DesarrolloSoftware;