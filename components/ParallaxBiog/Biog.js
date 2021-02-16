import Quote from './Quote'
import styles from './styles/ParallaxBiog.module.css'
import reactStringReplace from 'react-string-replace'

export default function Biog({ bio = String, quote = Object }){

    const highlightBio = string =>
        reactStringReplace(string, /\[+(.*?)\]+/g, (match, i) => (
            <strong key={i}>{match}</strong>
        ))
    const paragraphs = bio.split('\n')

    return (
        <>
            <article>
                <section 
                    className={`${styles.biogSection} ${styles.biogSection}`}
                >
                    <span>{highlightBio(paragraphs.slice(0, paragraphs.length / 2).join('\n'))}</span>
                </section>
                <Quote quote={quote} />
                <section className={`${styles.biogSection} ${styles.biogSection}`}>
                    <span>{highlightBio(paragraphs.slice(paragraphs.length / 2).join('\n'))}</span>
                </section>
            </article>
        </>
    )
}