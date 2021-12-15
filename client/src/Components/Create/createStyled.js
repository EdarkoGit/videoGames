import styled from "styled-components";
import { displayGrid } from "../../styles/mixins";
/* import { blue } from "../../styles/variables"; */

export const CreateStyled = styled.section`
  ${displayGrid()};
  min-height: calc(100vh - 59px);
  form {
    display: grid;
    align-items: center;
    width: 300px;
    height: 600px;
  }
`;
