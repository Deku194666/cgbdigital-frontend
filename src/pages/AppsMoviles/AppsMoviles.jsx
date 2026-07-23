



import React from "react";
import "./AppsMoviles.css";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import { appsMoviles } from "../../pages/data/servicesDetail";

const AppsMoviles = () => {
  return <ServiceDetail data={appsMoviles} />;
};

export default AppsMoviles;