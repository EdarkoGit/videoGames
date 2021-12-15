import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionsGenerator } from '../../actions/actions'
import { ORDER_ALL_VIDEOGAMES, ORDER_FILTER_CLICK, ORDER_FILTER_VIDEOGAME, SET_ALL_VIDEOGAMES, SET_FILTER_VIDEOGAME, SET_INPUT_ORDER } from '../../constant/constant'
import { specialOrder } from '../../metodos/metodos'
import { OrderStyled } from './orderStyled'

const Order = () => {
  const dispatch = useDispatch()
  const orderInfo = useSelector(store => store['orderInfo'])
  const whatRender = useSelector(store => store['whatRender'])
  const copyAllVideogames = useSelector(store => store['copyAllVideogames'])
  const copyFilterVideogames = useSelector(store => store['copyFilterVideogames'])
  const handleOnChangeInputOrder=(e)=>{
    e.preventDefault()
    dispatch(actionsGenerator(SET_INPUT_ORDER,e.target.value))
  }
  useEffect(() => {
    if (orderInfo==='default') {
      if(whatRender==='allVideogames') dispatch(actionsGenerator(SET_ALL_VIDEOGAMES,copyAllVideogames))
      else if( whatRender==='filterVideogames') dispatch(actionsGenerator(SET_FILTER_VIDEOGAME,copyFilterVideogames))
    }
    if (whatRender==='allVideogames') {
      dispatch(actionsGenerator(ORDER_ALL_VIDEOGAMES,specialOrder(copyAllVideogames,orderInfo)))
    }
    else if (whatRender==='filterVideogames') {
      dispatch(actionsGenerator(ORDER_FILTER_VIDEOGAME,specialOrder(copyFilterVideogames,orderInfo)))
    }
    dispatch(actionsGenerator(ORDER_FILTER_CLICK))
  }, [orderInfo,whatRender,copyAllVideogames,copyFilterVideogames,dispatch])
  return (
    <OrderStyled>
      <select onChange={handleOnChangeInputOrder} value={orderInfo}>
        <option value="default">Default</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="fullRating">Full Rating</option>
        <option value="littleRating">Little Rating</option>
      </select>
    </OrderStyled>
  )
}

export default Order
