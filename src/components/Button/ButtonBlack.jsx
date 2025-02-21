import styles from '../styled/styled.module.css'

const Button = ({button, text}) =>{
    return(
      
        <button className={`${button ? styles.order : styles.learnmore}`}>{text}</button>
    );
};
export default Button;