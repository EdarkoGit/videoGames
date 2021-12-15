import styled from 'styled-components'
import { displayGrid, styleButtonCollapse } from '../../styles/mixins'
import { blue, lightBlack} from '../../styles/variables'

export const FilterStyled= styled.form`
  background-color: ${lightBlack};
  ${displayGrid()}
  grid-template-columns: repeat(4,1fr);
  max-width: 320px;
  .btnFilter{
    background-color: ${blue};
    border-radius: 20px;
    width: 80px;
  }
  button{
    ${styleButtonCollapse()}
  }
`