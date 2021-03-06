/* 
    Site Menu 
        - Slides in from RHS
        - Displays links 
        - Changes appearance based on dark/light mode
        - If clicked outside of, should disappear    
*/

import OutsideClickHandler from 'react-outside-click-handler'
import { useEffect } from 'react'
import Link from 'next/link'
import { pages, socialMediaLinks } from '../lib'


const Menu = ({ showing, darkMode, toggleMenu }) => {

    /* add/remove .showing from #menu based on "showing" prop */
    useEffect(()=>{
        showing
            ? document.getElementById('menu').classList.add('showing')
            : document.getElementById('menu').classList.remove('showing')
    }, [showing])

    /* On pageload, paint SVGs */
    useEffect(()=>{
        socialMediaLinks.forEach((sm)=>{
            document.getElementById(`sm-${sm.name}`).innerHTML = sm.icon
        })
        if(darkMode){
            document.querySelectorAll('path').forEach(i => i.style.fill = '#fff')
            document.querySelectorAll('circle').forEach(i => i.style.fill = '#fff')
        }
    }, [])

    /* Make an array of pages */
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
                <div id="menu-socialMedia">
                    <ul>
                        {
                            socialMediaLinks.map((sm, i) => (
                                <a 
                                    key={i} 
                                    href={sm.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <li 
                                        id={`sm-${sm.name}`} 
                                    />
                                </a>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </OutsideClickHandler>
    )
}

export default Menu