import styles from './style.module.css'
import Button from '../Button/Button'

const ProductCardCarousel = ({img, type}) => {
    return(
        <div className={styles.cardWrapper}>
            <div className={styles.card}>
            <div className={styles.text}>
                {type}
            </div>
            <img className={styles.img} src={img} alt={type+' img'}/>
            <Button className={styles.primaryBtn} type='primary' component='Shop Now'/>
            </div>
        </div>
    )
}

export default ProductCardCarousel