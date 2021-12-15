import styled from 'styled-components'
import { displayGrid } from '../../styles/mixins'

export const RenderSectionStyled= styled.section`
  ${displayGrid()}
  @media (min-width:640px){
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width:960px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width:1280px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`