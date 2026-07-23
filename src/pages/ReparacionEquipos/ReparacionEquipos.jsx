
import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./ReparacionEquipos.css";
import { reparacionEquipos } from "../../pages/data/servicesDetail";

const ReparacionEquipos = () => {
  return <ServiceDetail data={reparacionEquipos} />;
};

export default ReparacionEquipos;