import Head from 'next/head'
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