import OutsideClickHandler from 'react-outside-click-handler'
import { useEffect } from 'react'
import Link from 'next/link'

const pages = [
    {
        display: 'home',
        link: '/'
    },
    {
        display: 'biography',
        link: '/biography'
    },
    {
        display: 'schedule',
        link: '/schedule'
    },
    {
        display: 'media',
        link: '/media'
    },
    {
        display: 'contact',
        link: '/contact'
    },
]

const Menu = ({ showing, darkMode, toggleMenu }) => {

    useEffect(()=>{
        showing
            ? document.getElementById('menu').classList.add('showing')
            : document.getElementById('menu').classList.remove('showing')
    }, [showing])

    const links = pages
        .map((page, i) =>
                <Link href={page.link} key={i}>
                    <a>
                        <li>
                            {page.display}
                            <span className={darkMode ? 'light-background' : 'dark-background'}></span>
                        </li>
                    </a>
                </Link>
        )

    return (
        <OutsideClickHandler onOutsideClick={() => {if(showing){toggleMenu()}}}>
            <nav 
                id="menu" 
                className={darkMode ? 'light-text' : 'dark-text'}
                style={
                    darkMode
                        ? {background: 'rgba(0,0,0,0.5)'}
                        : {background: 'rgba(255,255,255,0.5'}
                }    
            >
                <ul>
                    {links}
                </ul>
            </nav>
        </OutsideClickHandler>
    )
}

export default Menu