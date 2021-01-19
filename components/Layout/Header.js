import Link from 'next/link'
import Menu from './Menu'
import { useState, useEffect } from 'react'

const Header = ({ darkMode }) => {

    const [ showingMenu, setShowingMenuTo ] = useState(false)
    const toggleMenu = () => setShowingMenuTo(!showingMenu)

    const Hamburger = () => {
        const arr = [1,2,3]
        return arr.map(i =>
            <div 
                key={i}
                className={`hamburger ${ darkMode ? 'light-background' : 'dark-background' }`}
            />
        )
    }

    useEffect(()=>{
        showingMenu
            ? document.getElementById('menuButton').classList.add('showing')
            : document.getElementById('menuButton').classList.remove('showing')
    }, [showingMenu])

    return (
        <>
            <header className={ 
                darkMode 
                    ? 'dark-background light-text' 
                    : 'light-background dark-text'
            }>
                <div id="logo">
                    <Link href="/">
                        <a>
                            <h1>Johann Stuckenbruck</h1>
                            <h2>Conductor</h2>
                        </a>
                    </Link>
                </div>
                <div id="menuButton"
                    onClick={toggleMenu}
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