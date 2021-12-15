import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailVideogame } from '../../actions/actions'
import { renderMapToArray } from '../../metodos/metodosReact'
import {DetailStyled} from './detailStyled'

const Detail = ({match:{params:{idVideogame}}}) => {
  const dispatch = useDispatch()
  const detailVideogame = useSelector(store => store['detailVideogame'])
  useEffect(() => {
    dispatch(getDetailVideogame(idVideogame))
  }, [dispatch,idVideogame])
  return (
    <DetailStyled>
      {
        detailVideogame.name?
        <div className='detailCard'>
          <div>
            <h3>{detailVideogame.rating}</h3>
            <div>
              Genres:
              {
                renderMapToArray(detailVideogame.genres)
              }
            </div>
            <div>
              Platforms:
              {
                renderMapToArray(detailVideogame.platforms)
              }
            </div>
          </div>
          <img src={detailVideogame.img} alt="" />
          <h3>{detailVideogame.name}</h3>
          <p>{detailVideogame.description}</p>
          <div>Released: {detailVideogame.released}</div>
        </div>
        :
        'Loading...'
      }
    </DetailStyled>
  )
}

export default Detail

