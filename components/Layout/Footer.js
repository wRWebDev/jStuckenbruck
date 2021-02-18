//FIXME: Refactor this array away from this file 
    // - infact isn't it in the /lib folder... 
    //   which for some reason has wound up in components/

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

/*
    Footer
        - display sitemap
        - display client details/logo
        - link out to my site
*/
import Link from 'next/link'

const Footer = ({ hideFooter }) => {

    const links = pages
        .map((page, i) => {
            return (
                <Link href={page.link} key={i}>
                    <a>
                        <li>{page.display}</li>
                    </a>
                </Link>
            )
        })

    return (
        <footer style={hideFooter ? {display: 'none'} : {}}>
            <h3>Johann Stuckenbruck</h3>
            <h4>Conductor</h4>
            <nav>
                <ul>{links}</ul>
            </nav>
            <p>&copy; Johann Stuckenbruck 2021&nbsp;//&nbsp;
                <a href="https://wrweb.dev" rel="noopener noreferrer" target="_blank">
                    Site Design @wRWebDev
                </a>
            </p>
        </footer>
    )
}

export default Footer