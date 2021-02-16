import styles from './styles/ParallaxBiog.module.css'

export default function Quote({ quote = Object }){
    return (
        <section 
            className={`${styles.biogSection} ${styles.quoteSection}`}
        >
            <div className={styles.quoteInner}>
                <h2>{quote.quote}</h2>
                <h3>{quote.source}</h3>
            </div>
        </section>
    )
}