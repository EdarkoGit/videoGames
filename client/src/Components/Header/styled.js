import styled from 'styled-components'
import {lightBlack,blue} from '../../styles/variables'

export const HeaderStyled= styled.header`
  background-color: ${lightBlack};
  div{
    display: grid;
    justify-items: center;
    grid-template-columns: auto 1fr;
    padding: 20px;
  }
`
export const Navbar= styled.nav`
  position: absolute;
  width: 100vw; 
  background-color: ${blue};
  ul{
    display: grid;
    padding: 20px;
    li{
      a{
        &:hover{
          color: ${lightBlack};
        }
      }
    }
  }
`
export const NavbarDesktop= styled.nav`
  ul{
    display: grid;
    grid-template-columns: auto repeat(4,1fr);
    justify-items: center;
    padding: 20px;
    li{
      a{
        &:hover{
          color: ${blue};
        }
      }
    }
  }
`