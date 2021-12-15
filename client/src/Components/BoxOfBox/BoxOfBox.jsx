import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionsGenerator } from '../../actions/actions'
import { SET_FLAG_EXISTS, SET_FLAG_GENRES, SET_INFO_FILTER } from '../../constant/constant'
import {Box} from './boxOfBoxStyled' // es de type section

const BoxOfBox = () => {
  const dispatch = useDispatch()
  const genres = useSelector(store => store['genres'])
  const flagGenres = useSelector(store => store['flagGenres'])
  const infoFilter = useSelector(store => store['infoFilter'])
  const handleOnClick=(e)=>{
    e.preventDefault()
    dispatch(actionsGenerator(SET_FLAG_GENRES,!flagGenres))
    dispatch(actionsGenerator(SET_FLAG_EXISTS,false))
  }
  const handleOnChangeInfoFilter=(e)=>{
    if (infoFilter.genres.includes(e.target.value)) {
      dispatch(actionsGenerator(SET_INFO_FILTER,
        {
          ...infoFilter,
          'genres': infoFilter.genres.filter(element=>element!==e.target.value)
        }
      ))
    }
    else{
      dispatch(actionsGenerator(SET_INFO_FILTER,
        {
          ...infoFilter,
          'genres': [...infoFilter['genres'],e.target.value]
        }
      ))
    }
  }
  return (
    <Box>
      <button onClick={handleOnClick}>Genres v</button>
      {
        flagGenres?
        <div className='groupBox'>
          {
            genres.map(element=>{
              return (
                <span key={element.id}>
                  <input type="checkbox"  id={element.id} value={element.name} onChange={handleOnChangeInfoFilter} checked={infoFilter.genres.includes(`${element.name}`)}/>
                  <label htmlFor={element.id}>{element.name.split('-')[0]}</label>
                </span>
              )
            })
          }
        </div>
        :
        null
      }
    </Box>
  )
}

export default BoxOfBox