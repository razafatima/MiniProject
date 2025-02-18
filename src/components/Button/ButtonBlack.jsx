import styles from '../styled/styled.module.css'

const Button = ({style}) =>{
    return(
     
        <div className={styles.buttonContainer} style={style}>
            <button className={styles.ordernow}>Order Now</button>
            <button className={styles.learnmore}>Learn More</button>
        </div>

    );
};
export default Button;