import React from 'react'
import {Link} from 'react-router-dom'
import { renderMapToArray } from '../../metodos/metodosReact'
import {CardStyled} from './cardStyled'

const Card = ({id,name, genres, img}) => {
  return (
    <Link to={`/detail/${id}`}  >
      {
        name?
        <CardStyled>
          <img src={img} alt="" />
          <div>
            <h2>{name}</h2>
            <div>
              Genres:
              {
                renderMapToArray(genres)
              }
            </div>
          </div>
        </CardStyled>
        :
        'Not found :('
      }
    </Link>
  )
}

export default Card
