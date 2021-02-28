/* 
    Title Card
        - Show title with page image as background
*/

import styles from './styles/ParallaxBiog.module.css'
import { useEffect } from 'react'

export default function TitleCard({ title = String, image = String }){
    
    /* 
        Function to move background of title card differently to expectations 
            - called in useEffect by EventListener    
    */
    const parallaxScroll = () => {
        const el = document.getElementById('biogTitleCard')
        let offset = window.pageYOffset
        el.style.backgroundPositionY = `${offset * -0.7}px`
    }

    useEffect(() => {
        /* Extend the cover photo behind the menu */
        // document.querySelector('main').style.marginTop = 0
        /* ON COMPONENT MOUNT: Add scroll listener to make parallax effect */
        // document.addEventListener('scroll', parallaxScroll)
        /* ON COMPONENT DISMOUNT: Remove scroll listener */
        // return () => document.removeEventListener('scroll', parallaxScroll)
    }, [])

    return (
        <section 
            id="biogTitleCard"
            className={`${styles.biogSection} ${styles.titleSection}`}
            style={{backgroundImage: `url(${image})`}}    
        >
            <h1>{title}</h1>
        </section>
    )
}