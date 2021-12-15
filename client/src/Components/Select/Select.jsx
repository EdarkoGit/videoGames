import React, { useState } from "react";
import { SelectStyled } from "./SelectStyled";

const Select = ({ btnTitle, arr = [] }) => {
  const [flagBox, setFlagBox] = useState(false);
  const onClickDisplayBox = (e) => {
    e.preventDefault();
    setFlagBox(!flagBox);
  };

  if (arr.length === 0 && !btnTitle) {
    return <div>Send props</div>;
  }
  return (
    <SelectStyled>
      <button onClick={onClickDisplayBox}>{btnTitle}</button>
      {flagBox ? renderBox(arr) : null}
    </SelectStyled>
  );
};

export default Select;

const renderBox = (arr) => {
  return (
    <div>
      {arr.map((e) => {
        return (
          <div>
            <input type="checkbox" id={e.id} key={e.id} value={e.name} />
            <label htmlFor={e.id}>{e.name.split("-")[0]}</label>
          </div>
        );
      })}
    </div>
  );
};
