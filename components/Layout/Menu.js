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

const Menu = ({ showing, darkMode }) => {

    useEffect(()=>{
        showing
            ? document.getElementById('menu').classList.add('showing')
            : document.getElementById('menu').classList.remove('showing')
    }, [showing])

    const links = pages
        .map((page, i) => {
            return (
                <Link href={page.link} key={i}>
                    <a>
                        <li>
                            {page.display}
                            <span
                                className={darkMode ? 'light-background' : 'dark-background'}
                            ></span>
                        </li>
                    </a>
                </Link>
            )
        })

    return (
        <nav id="menu" className={darkMode ? 'dark-background light-text' : 'light-background dark-text'}>
            <ul>
                {links}
            </ul>
        </nav>
    )
}

export default Menu