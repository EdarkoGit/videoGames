import React from "react";
import { useSelector } from "react-redux";

import { Btn } from "../Btn/btn";
import Select from "../Select/Select";
import { CreateStyled } from "./createStyled";
const Create = () => {
  const genres = useSelector((store) => store["genres"]);
  return (
    <CreateStyled>
      <form action="">
        <Select btnTitle="Genres" arr={genres} />
        <input className="inputText" type="text" placeholder="Name" />
        <textarea name="" id="" cols="23" rows="5" placeholder="Description" />
        <input type="date" />
        <input type="file" />
        <Btn>Crear</Btn>
      </form>
    </CreateStyled>
  );
};

export default Create;
