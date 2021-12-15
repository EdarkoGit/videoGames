import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionsGenerator } from '../../actions/actions'
import { SET_SLICE_VIDEOGAMES } from '../../constant/constant'
import { PagedStyled } from './pagedStyled'
import {FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'

const Paged = () => {
  const dispatch = useDispatch()
  const allVideogames = useSelector(store => store['allVideogames'])
  const filterVideogames = useSelector(store => store['filterVideogames'])
  const whatRender = useSelector(store => store['whatRender'])
  const orderFilterClick = useSelector(store => store['orderFilterClick'])
  const [limit, setLimit] = useState(15)
  const [countButton, setCountButton] = useState(0)
 
  const arrButton= []
  let valueButton=15
  for (let i = 0; i < countButton; i++) {
    arrButton.push(valueButton)  
    valueButton+=15
  }                                                       //-------------------
  useEffect(() => {
    if (whatRender==='allVideogames') return setCountButton(Math.ceil(allVideogames.length/15))
    setCountButton(Math.ceil(filterVideogames.length/15))
  }, [whatRender,filterVideogames,allVideogames])

  useEffect(() => {
    if (whatRender==='allVideogames') {
      dispatch(actionsGenerator(SET_SLICE_VIDEOGAMES,allVideogames.slice(limit-15,limit)))
    }
    else if (whatRender==='filterVideogames') {
      dispatch(actionsGenerator(SET_SLICE_VIDEOGAMES,filterVideogames.slice(limit-15,limit)))
    }
  }, [limit,dispatch,allVideogames,filterVideogames,whatRender])

  useEffect(() => {
    setLimit(15)
  }, [whatRender,orderFilterClick])

  const handleOnClickLimit=(e)=>{
    const flagNaN= parseInt(e.target.id)
    if(!isNaN(flagNaN))setLimit(flagNaN)
  }
  const handleOnClickNext=()=>{
    if(limit < arrButton[arrButton.length-1]) setLimit(limit+15)
  }
  const handleOnClickBefore=()=>{
    if(limit>15) setLimit(limit-15)
  }
  if (countButton<=1) return null
  return (
    <PagedStyled>
      <div>
        <FaAngleDoubleLeft 
          className='arrows'  
          onClick={handleOnClickBefore}
        />
        
        {
          arrButton.length>0?
          arrButton.map((element,i)=>(
              <button
               className='numbers' 
               key={element} id={element}
               onClick={handleOnClickLimit}
              >
                {i+1}
              </button>)
            )
          :
          null
        }
        <FaAngleDoubleRight 
          className='arrows' 
          onClick={handleOnClickNext}
        />
      </div>
    </PagedStyled>
  )
}

export default Paged
