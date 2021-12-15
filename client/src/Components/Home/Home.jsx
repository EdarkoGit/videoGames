import React from 'react'
import { useDispatch } from 'react-redux'
import { actionsGenerator } from '../../actions/actions'
import { SET_FLAG_EXISTS, SET_FLAG_GENRES } from '../../constant/constant'
import Filter from '../Filter/Filter'
import Order from '../Order/Order'
import RenderSection from '../RenderSection/RenderSection'
import Search from '../Search/Search'
import {HomeStyled} from './homeStyled'

const Home = () => {
  const dispatch = useDispatch()
  const handleOnClickSetFlagGenresExists = (e)=>{
    if (e.target.tagName==='SECTION' || e.target.tagName==='DIV') {
      dispatch(actionsGenerator(SET_FLAG_GENRES,false))
      dispatch(actionsGenerator(SET_FLAG_EXISTS,false))
    }
  }
  return (
    <HomeStyled onClick={handleOnClickSetFlagGenresExists}>
      <Search/>
      <Filter/>
      <Order/>
      <RenderSection/>
    </HomeStyled>
  )
}

export default Home
