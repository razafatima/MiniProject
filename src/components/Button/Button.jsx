import styles from '../styled/styled.module.css'

const Button = ({style}) =>{
    return(
     
        <div className={styles.buttonContainer} style={style}>
            <button className={styles.btnordernow}>Order Now</button>
            <button className={styles.btnlearnmore}>Learn More</button>
        </div>

    );
};
export default Button;