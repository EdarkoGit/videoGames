import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import Paged from '../Paged/Paged'
import {RenderSectionStyled} from './renderSectionStyled'

const RenderSection = () => {
  const sliceVideogames = useSelector(store => store['sliceVideogames'])
  const videogame = useSelector(store => store['videogame'])
  const whatRender = useSelector(store => store['whatRender'])

  return (
    <>
      <Paged/>
      <RenderSectionStyled >
        {
          whatRender==='videogame'?
            Array.isArray(videogame)?
            videogame.map(element=><Card key={element.id} id={element.id} name={element.name} genres={element.genres} img={element.img} />) 
            :
            <Card/>
          :
          whatRender==='filterVideogames'|| whatRender==='allVideogames'?
          sliceVideogames.map(element=><Card key={element.id} id={element.id} name={element.name} genres={element.genres} img={element.img} />)
          :
          null
        }
      </RenderSectionStyled>
      <Paged/>
    </>
  )
}

export default RenderSection
