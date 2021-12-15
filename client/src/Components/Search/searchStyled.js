import styled from "styled-components";
import { defaultStyleInputs, displayGrid } from "../../styles/mixins";
import { blue } from "../../styles/variables";

export const SearchForm = styled.form`
  ${displayGrid()}
  grid-template-columns: 1fr auto;
  padding: 8px;
  max-width: 400px;
  input {
    justify-self: stretch;
    ${defaultStyleInputs()}
  }
  button {
    background-color: ${blue};
    color: white;
    width: 100px;
    padding: 8px;
    border-radius: 15px;
    border: none;
    outline: none;
    box-shadow: 1px 1px 5px 1px black;
    font-weight: bold;
  }
`;
