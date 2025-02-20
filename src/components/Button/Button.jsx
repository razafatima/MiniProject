import styles from '../styled/styled.module.css';

 const Button = ({children, btns=false})=>{

  return(
      <button className={` ${btns ? styles.primary : styles.secondary}`}>{children}</button>
  );
 }
export default Button;

// const Button = ({style, children, ...props}) =>{
//     return(
     
//         // <div className={styles.buttonContainer} style={style}>
//         //     <button className={styles.btnordernow}>Order Now</button>
//         //     <button className={styles.btnlearnmore}>Learn More</button>
//         // </div>


//     );
// };
   

