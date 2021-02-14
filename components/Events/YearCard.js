import styles from './styles/events.module.css'

const YearCard = ({ year }) => {
    const array = year.toString().split("")
    console.log(array)
    return (
        <div className={styles.yearCard}>
            {array.map(i => <div>{i}</div>)}
        </div>
    )
}

export default YearCard