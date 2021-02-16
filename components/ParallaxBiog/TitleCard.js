import styles from './styles/ParallaxBiog.module.css'
import { useEffect } from 'react'

export default function TitleCard({ title = String, image = String }){

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            const el = document.getElementById('biogTitleCard')
            let offset = window.pageYOffset
            el.style.backgroundPositionY = `${-offset * 0.3}px`
        })
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