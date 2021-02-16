import Quote from './Quote'
import styles from './styles/ParallaxBiog.module.css'

export default function Biog({ bio = String, quote = Object }){

    const paragraphs = bio.split(' ')

    return (
        <>
            <article>
                <section 
                    className={`${styles.biogSection} ${styles.biogSection}`}
                >
                    {paragraphs.slice(0, paragraphs.length / 2).join(' ')}
                </section>
                <Quote quote={quote} />
                <section className={`${styles.biogSection} ${styles.biogSection}`}>
                    {paragraphs.slice(paragraphs.length / 2).join(' ')}
                </section>
            </article>
        </>
    )
}