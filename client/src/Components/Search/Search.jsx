import React, { useState } from "react";
import { SearchForm } from "./searchStyled";
import { useDispatch } from "react-redux";
import { reqGetMyServer } from "../../actions/actions";
import { InputStyled } from "../Input/styled";

const Search = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState("");
  const handleOnChangeSearchName = (e) => {
    setSearchName(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchName !== "") {
      dispatch(reqGetMyServer(searchName));
      setSearchName("");
    }
  };
  return (
    <SearchForm action="" onSubmit={handleOnSubmit}>
      <InputStyled
        type="text"
        onChange={handleOnChangeSearchName}
        value={searchName}
      />
      <button>Search</button>
    </SearchForm>
  );
};

export default Search;
