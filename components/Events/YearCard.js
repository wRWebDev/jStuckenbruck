/*
    Year Card
        - Displays each digit of the year in its own div, 
          wrapped in a containing card-sized div.
        - Preceeded by an empty div of flexBasis:100%
            - this forces a new line for each new year.
*/

import styles from './styles/events.module.css'

const YearCard = ({ year }) => {
    const array = year.toString().split("")
    return (
        <>
            <div style={{flexBasis: '100%'}} />
            <div className={styles.yearCard}>
                {array.map((x, i) => <div key={i}>{x}</div>)}
            </div>
        </>
    )
}

export default YearCard