import {css} from 'styled-components'
import {black, blue, lightBlack} from './variables'

export const displayGrid=()=>css`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 5px;
`
export const defaultStyleInputs=()=>css`
  padding: 8px;
  border-radius: 15px;
  border: none;
  outline: none;
  box-shadow: 1px 1px 5px 1px black;
  font-weight: bold;
  background-color: ${blue};
  color: ${black};
`
export const styleButtonCollapse=()=>css`
  ${defaultStyleInputs()}
  border-radius: 0px;
  background-color: ${lightBlack};
  color: white;
  min-width: 70px;
`