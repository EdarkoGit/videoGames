import React from 'react'
import { useSelector } from 'react-redux'
import { renderBoxOfChexbox } from '../../metodos/metodosReact'
import { GenresSelectStyled } from './genresStyled'

const GenresSelect = () => {
  const genres = useSelector(store => store['genres'])
  const [flagGenres, setFlagGenres] = useState(false)
  const handleOnClickBoxOfChexbox = ()=> setFlagGenres(!flagGenres)
  return (
    <GenresSelectStyled>
      <button onClick={handleOnClickBoxOfChexbox}>Genres</button>
      {
        flagGenres && genres?
        renderBoxOfChexbox(genres)
        :
        null
      }
    </GenresSelectStyled>
  )
}

export default GenresSelect
