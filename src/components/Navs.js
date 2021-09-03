import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavList, LinkStyled } from './Navs.styled'

const Navs = () => {
    const location = useLocation();

    const LINKS = [
        {to: '/', text: 'Home'},
        {to: '/starred', text: 'Starred'}
    ]
    return (
        <div>
            <NavList>
            {
                LINKS.map(link => <li key={link.to}><LinkStyled className={link.to === location.pathname ? 'active' : ''} to={link.to}>{link.text}</LinkStyled></li>)
            }
            </NavList>
        </div>
    )
}

export default Navs
