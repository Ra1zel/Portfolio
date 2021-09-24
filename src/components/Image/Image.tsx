import styles from './Image.module.css'
import img from '../../imageSelf.jpg'
const Image = () => {
    return (<div className={styles.imageContainer}>
        <img src={img} alt="Muhammad Ali" className={styles.image} />
    </div>);
}
export default Image
