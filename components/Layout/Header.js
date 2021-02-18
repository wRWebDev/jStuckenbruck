/*
    Site Header / Top Banner
        - Shows client's logo/details
        - Custom hamburger menu button (3 divs in a containing div - all CSS)
*/

import Link from 'next/link'
import Menu from './Menu'
import { useState, useEffect } from 'react'

const Header = ({ darkMode }) => {

    const [ showingMenu, setShowingMenuTo ] = useState(false)
    //function to open/close the menu
    const toggleMenu = () => setShowingMenuTo(!showingMenu)

    /*  
        A module just for the Hamburger icon
            - created for the sake of abstracting away complexity from 
              the main component below
            - created by taking an array, length 3, and creating a div 
              for each item in the array.
    */
    const Hamburger = () => {
        const arr = [1,2,3]
        return arr.map(i =>
            <div 
                key={i}
                className={`hamburger ${ darkMode ? 'light-background' : 'dark-background' }`}
            />
        )
    }

    /* Add/Remove .showing from #menuButton when state changes */
    useEffect(()=>{
        showingMenu
            ? document.getElementById('menuButton').classList.add('showing')
            : document.getElementById('menuButton').classList.remove('showing')
    }, [showingMenu])

    /* 
        On pageload, change body background to light/dark mode 
            - depends on darkMode prop 
            - darkMode prop originates in pageProperties obj, defined in /pages/{page}
    */
    useEffect(()=>{
        if(darkMode){
            document.querySelector('body').classList.add('dark-background')
        }else{
            document.querySelector('body').classList.remove('dark-background')
        }
    }, [])

    return (
        <>
            <header 
                id="site-header"
                className={ 
                    darkMode 
                        ? 'light-text' 
                        : 'dark-text'
                }
                style={
                    darkMode
                        ? {background: 'rgba(0,0,0,0.1)'}
                        : {background: 'rgba(255,255,255,0.5)'}
                }
            >
                <div id="logo">
                    <Link href="/">
                        <a>
                            <h1>Johann Stuckenbruck</h1>
                            <h2>Conductor</h2>
                        </a>
                    </Link>
                </div>
                <div id="menuButton"
                    onClick={() => !showingMenu ? setShowingMenuTo(true) : null}
                >
                    <Hamburger />
                </div>
            </header>
            <Menu 
                showing={showingMenu}
                toggleMenu={toggleMenu}
                darkMode={darkMode}
            />
        </>
    )
}

export default Header