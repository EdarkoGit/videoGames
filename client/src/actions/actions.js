import {
  SET_ALL_VIDEOGAMES,
  SET_DETAIL_VIDEOGAME,
  SET_GENRES,
  SET_VIDEOGAME,
  URL_GENRES,
  URL_VIDEOGAMES,
} from "../constant/constant";

import { reqAxios } from "../metodos/metodos";

export const actionsGenerator = (type, payload) => {
  return { type, payload };
};
export const reqGetMyServer = (param) => {
  return async function (dispatch) {
    if (param)
      return dispatch(
        actionsGenerator(
          SET_VIDEOGAME,
          await reqAxios(`${URL_VIDEOGAMES}?word=${param}`)
        )
      );
    const result = await reqAxios(URL_VIDEOGAMES);
    dispatch(actionsGenerator(SET_ALL_VIDEOGAMES, result));
  };
};
export const getAllGenres = () => {
  return async function (dispatch) {
    dispatch(actionsGenerator(SET_GENRES, await reqAxios(URL_GENRES)));
  };
};
export const getDetailVideogame = (idVideogame) => {
  return async function (dispatch) {
    dispatch(
      actionsGenerator(
        SET_DETAIL_VIDEOGAME,
        await reqAxios(URL_VIDEOGAMES + "/" + idVideogame)
      )
    );
  };
};
