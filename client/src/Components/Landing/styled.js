import styled from 'styled-components'
import godOfWarMobile from './godOfWarMobile.jpg'
import gearsOfWarPc from './gearsOfWarPc.jpg'

export const LandingStyled = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${godOfWarMobile});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  @media (min-width:600px){
    background-image: url(${gearsOfWarPc});

  }
`