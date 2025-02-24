import styles from '../styled/styled.module.css';

 const Button = ({text, btns})=>{

  return(
      <button className={` ${styles.btn} ${btns ? styles.primary : styles.secondary}`}>{text}</button>
  );
 }
export default Button;



