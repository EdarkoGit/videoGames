import { Link } from 'react-router-dom'
import {FaBars,FaDiscord} from 'react-icons/fa'
import {Navbar,HeaderStyled, NavbarDesktop} from './styled'
import { useEffect, useState } from 'react'


const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [width, setWidth] = useState(0)

  const handleOnClickShowMenu=()=>{
    setShowMenu(!showMenu)
  }
  const handleWindowEvent=()=>{
    setWidth(window.innerWidth)
    console.log(width)
  }
  useEffect(() => {
    window.addEventListener('resize',handleWindowEvent)
    return () => {
      window.removeEventListener('resize',handleWindowEvent)
    }
  })
  useEffect(() => {
    setWidth(window.innerWidth)
  },[])
    
  return (
    <HeaderStyled >
      {
        width<=768?
        <>
          <div>
            <FaBars onClick={handleOnClickShowMenu}/>
            <FaDiscord/>
          </div>
          {
            showMenu?
            <Navbar>
              <ul>
                <li><Link to='/'>Landing</Link></li>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/create'>Create</Link></li>
                <li><Link to='/delete'>Delete</Link></li>
              </ul>
            </Navbar>
            : 
            null
          }
        </>
        :
        <NavbarDesktop>
          <ul>
            <li><Link to='/'><FaDiscord/></Link></li>
            <li><Link to='/'>Landing</Link></li>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/create'>Create</Link></li>
            <li><Link to='/delete'>Delete</Link></li>
          </ul>
        </NavbarDesktop>
      }
    </HeaderStyled>
  )
}
export default Header
