import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionsGenerator } from '../../actions/actions'
import { SET_FLAG_EXISTS, SET_FLAG_GENRES, SET_INFO_FILTER } from '../../constant/constant'
import {RadioBoxStyled} from './radioBoxStyled'

const RadioBox = () => {
  const dispatch = useDispatch()
  const flagExists = useSelector(store => store['flagExists'])
  const infoFilter = useSelector(store => store['infoFilter'])
  const handleOnclickFlagExists=(e)=>{
    e.preventDefault()
    dispatch(actionsGenerator(SET_FLAG_EXISTS,!flagExists))
    dispatch(actionsGenerator(SET_FLAG_GENRES,false))
  }
  const handleOnClickInfoFilter=(e)=>{
    if (infoFilter['exists']===e.target.id)  return dispatch(actionsGenerator(SET_INFO_FILTER,{...infoFilter,[e.target.name]:''}))
    dispatch(actionsGenerator(SET_INFO_FILTER,{...infoFilter,[e.target.name]:e.target.id}))
  }
  return (
    <RadioBoxStyled>
      <button onClick={handleOnclickFlagExists}>Exists v</button>
      {
        flagExists?
        <div className='boxRadio'>
          <span>
            <input type="radio" id='existing' name='exists' onClick={handleOnClickInfoFilter} readOnly checked={infoFilter['exists']==='existing'}/>
            <label htmlFor="existing">Existing</label>
          </span>
          <span>
            <input type="radio" id='created' name='exists'  onClick={handleOnClickInfoFilter} readOnly checked={infoFilter['exists']==='created'}/>
            <label htmlFor="created">Created</label>
          </span>
        </div>
        :
        null
      }
    </RadioBoxStyled>
  )
}

export default RadioBox
