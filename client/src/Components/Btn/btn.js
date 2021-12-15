import styled from "styled-components";

export const Btn = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor || "#202020"};
  width: ${({ width }) => width || "120px"};
  color: ${({ color }) => color || "white"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  padding: ${({ padding }) => padding || "10px"};
  border-radius: ${({ borderRadius }) => borderRadius || "25px"};
  font-size: ${({ fontSize }) => fontSize || "inherit"};
  border: none;
  outline: none;
  box-shadow: 1px 1px 5px 1px black;
  font-weight: bold;
`;
