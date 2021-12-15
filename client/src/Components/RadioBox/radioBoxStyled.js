import styled from 'styled-components'
import {displayGrid, styleButtonCollapse} from '../../styles/mixins'
import {lightBlack} from '../../styles/variables'

export const RadioBoxStyled= styled.section`
  button{
    ${styleButtonCollapse()}
  }
  .boxRadio{
    position: absolute;
    background-color: ${lightBlack};
    ${displayGrid()}
    padding: 10px 10px 10px 0px;
  }
`