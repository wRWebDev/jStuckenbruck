import { useEffect } from 'react'
import styles from './styles/ParallaxBiog.module.css'


export default function Download({ coverImage }){

    return (
        <section
            id="biogDownload"
            className={`${styles.biogSection} ${styles.downloadSection}`}
            // FIXME: Cross-site script issue when using fast-average-color
            // Error info at https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
            // Homepage: https://github.com/fast-average-color/fast-average-color
            // style={{background:'#546A47'}}
        >
            <button>Download</button>
        </section>
    )
}