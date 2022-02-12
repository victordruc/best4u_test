import styles from './style.module.css'

const HeroText = ({children}) => {
    return (
        <h1 className={styles.heroText}>
            {children}
        </h1>
    )
}

export default HeroText