import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="LandingList">
      <Link to="/search">
        <h4 className="LandingButton">Find weather by country</h4>
      </Link>
    </div>
  );
};

export default Landing;
