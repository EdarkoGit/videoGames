import axios from "axios";
export const reqAxios = async (url) => {
  const reqAxios = await axios(url);
  return reqAxios.data;
};
export const specialFilter = (array, info) => {
  if (info.genres.length > 0 && info.exists !== "") {
    if (info.exists === "existing") {
      return array.filter(
        (element) =>
          !element.db && isAnyElmentAincludesArrayB(info.genres, element.genres)
      );
    } else {
      return array.filter(
        (element) =>
          element.db && isAnyElmentAincludesArrayB(info.genres, element.genres)
      );
    }
  } else if (info.genres.length > 0) {
    return array.filter((element) =>
      isAnyElmentAincludesArrayB(info.genres, element.genres)
    );
  } else if (info.exists !== "") {
    if (info.exists === "existing")
      return array.filter((element) => !element.db);
    else if (info.exists !== "") return array.filter((element) => element.db);
  }
};
export const specialOrder = (array, typeOrder) => {
  const copyArray = [...array];
  if (typeOrder === "a-z") {
    return copyArray.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }
  if (typeOrder === "z-a") {
    return copyArray.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  }
  if (typeOrder === "fullRating") {
    return copyArray.sort((a, b) => {
      if (a.rating < b.rating) return 1;
      if (a.rating > b.rating) return -1;
      return 0;
    });
  }
  if (typeOrder === "littleRating") {
    return copyArray.sort((a, b) => {
      if (a.rating < b.rating) return -1;
      if (a.rating > b.rating) return 1;
      return 0;
    });
  }
  return copyArray;
};
const isAnyElmentAincludesArrayB = (a, b) => {
  return a.some((element) => b.includes(element));
};
