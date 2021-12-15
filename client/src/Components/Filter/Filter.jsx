import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionsGenerator } from "../../actions/actions";
import {
  ORDER_FILTER_CLICK,
  SET_FILTER_VIDEOGAME,
  SET_FLAG_EXISTS,
  SET_FLAG_GENRES,
  SET_INFO_FILTER,
  SET_WHAT_RENDER,
} from "../../constant/constant";
import { specialFilter } from "../../metodos/metodos";
import BoxOfBox from "../BoxOfBox/BoxOfBox";
import RadioBox from "../RadioBox/RadioBox";
import { FilterStyled } from "./filterStyled";

const Filter = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector((store) => store["allVideogames"]);
  const infoFilter = useSelector((store) => store["infoFilter"]);

  const handleOnClickFilter = (e) => {
    e.preventDefault();
    if (infoFilter["genres"].length > 0 || infoFilter["exists"] !== "") {
      dispatch(
        actionsGenerator(
          SET_FILTER_VIDEOGAME,
          specialFilter(allVideogames, infoFilter)
        )
      );
      dispatch(
        actionsGenerator(SET_INFO_FILTER, {
          ...infoFilter,
          genres: [],
          exists: "",
        })
      ); //clean infoFilter
      dispatch(actionsGenerator(SET_FLAG_GENRES, false));
      dispatch(actionsGenerator(SET_FLAG_EXISTS, false));
      dispatch(actionsGenerator(ORDER_FILTER_CLICK));
    }
  };
  const handleOnClickAll = (e) => {
    e.preventDefault();
    dispatch(actionsGenerator(SET_WHAT_RENDER, "allVideogames"));
  };

  return (
    <FilterStyled>
      <BoxOfBox />
      <RadioBox />
      <button className="btnFilter" onClick={handleOnClickFilter}>
        Filter
      </button>
      <button onClick={handleOnClickAll}>All</button>
    </FilterStyled>
  );
};

export default Filter;
