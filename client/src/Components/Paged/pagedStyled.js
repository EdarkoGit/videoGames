import styled from 'styled-components'
import { displayGrid } from '../../styles/mixins'
import { lightBlack } from '../../styles/variables'

export const PagedStyled= styled.div`
  ${displayGrid()}
  padding: 5px;
  div{
    display: flex;
    align-items: center;
    .numbers{
      background-color: ${lightBlack};
      border: none;
      margin-left: 2px;
      margin-right: 2px;
      border-radius: 15px;
      color: gray;
      width: 30px;
      padding: 5px;
    }
    .arrows{
      svg{
        color: white;
      }
    }
  }

`