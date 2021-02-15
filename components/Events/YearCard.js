import styles from './styles/events.module.css'

const YearCard = ({ year }) => {
    const array = year.toString().split("")
    return (
        <div className={styles.yearCard}>
            {array.map((x, i) => <div key={i}>{x}</div>)}
        </div>
    )
}

export default YearCard