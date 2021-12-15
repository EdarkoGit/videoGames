import styled from 'styled-components'
import {styleButtonCollapse, displayGrid} from '../../styles/mixins'
import {lightBlack} from '../../styles/variables'
export const Box= styled.section`
  button{
    ${styleButtonCollapse()}
  }
  .groupBox{
    background-color: ${lightBlack};
    color: white;
    position: absolute;
    ${displayGrid()}
    justify-items: start;
    gap: 0px;
    grid-template-columns: repeat(3, 1fr);
    font-size: 1.80rem;
    padding-right: 7px;
  } 
`