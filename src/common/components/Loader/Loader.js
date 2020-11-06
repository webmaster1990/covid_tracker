import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.scss";

const Loader = () => (
  <div className="loader">
    <div className="position">
      <Spinner animation="border" style={{ width: "3rem", height: "3rem" }} />
    </div>
  </div>
);

export default Loader;
