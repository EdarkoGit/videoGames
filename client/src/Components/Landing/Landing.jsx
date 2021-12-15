import React from "react";
import { Link } from "react-router-dom";
import { Btn } from "../Btn/btn";
import { LandingStyled } from "./styled";

const Landing = () => {
  return (
    <LandingStyled>
      <Link to="/home">
        <Btn>Start</Btn>
      </Link>
    </LandingStyled>
  );
};

export default Landing;
