import styles from '../styled/styled.module.css'


const NotificationBanner = () =>{
  return(
    <div className={styles.banner}>
      <p className={styles.text}>
        <strong>Inventory Model Y Available Now</strong>
        Explore Reduced Pricing
      </p>
      <button className={styles.button}>View Inventory</button>
    </div>
  )

};

export default NotificationBanner;
