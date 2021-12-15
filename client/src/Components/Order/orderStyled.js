import styled from 'styled-components'
import { defaultStyleInputs } from '../../styles/mixins'

export const OrderStyled= styled.form`
  select{
    ${defaultStyleInputs()}
    border-radius: 0px;
    color: white;
    option{
      font-weight: bold;     
    }
  }
`