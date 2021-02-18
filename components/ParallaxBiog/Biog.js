/*
    Biog

        - bold highlights any words surrounded by square braces
        - splits up the biog into paragraphs
        - Returns: 
            - half the biog in one section
            - returns the featured quote
            - remaining half of the biog in another section
*/

import Quote from './Quote'
import styles from './styles/ParallaxBiog.module.css'
import reactStringReplace from 'react-string-replace'

export default function Biog({ bio = String, quote = Object }){

    /* Place any words in [square brackets] into <strong> tags */
    const highlightBio = string =>
        reactStringReplace(string, /\[+(.*?)\]+/g, (match, i) => (
            <strong key={i}>{match}</strong>
        ))
    /* Split biog up by line-breaks */
    const paragraphs = bio.split('\n')

    return (
        <>
            {/* Article tag for SEO */}
            <article>

                {/* Show 1st half of bio */}
                <section 
                    className={`${styles.biogSection} ${styles.biogSection}`}
                    >
                    <span>{highlightBio(paragraphs.slice(0, paragraphs.length / 2).join('\n'))}</span>
                </section>

                {/* 
                    Show the featured quote
                        TODO: 
                            [ ] Provide Quote as a child of Biog component ??
                */}
                <Quote quote={quote} />
                
                {/* Show 2nd half of bio */}
                <section className={`${styles.biogSection} ${styles.biogSection}`}>
                    <span>{highlightBio(paragraphs.slice(paragraphs.length / 2).join('\n'))}</span>
                </section>
            </article>
        </>
    )
}