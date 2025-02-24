import styles from '../styled/styled.module.css'

const Notificationdata = {

      "btn": "View Inventory",
      "text":"Inventory Model Y Available Now Explore Reduced Pricing",

};

const NotificationBanner = () =>{
  return(
         <div className={styles.banner}>
          <p className={styles.text}>
                <strong>{Notificationdata.text}</strong>
                <button className={styles.button}>{Notificationdata.btn}</button>
            </p>
           </div>
    


    // <div className={styles.banner}>
    //   <p className={styles.text}>
    //     <strong>Inventory Model Y Available Now</strong>
    //     Explore Reduced Pricing
    //   </p>
    //   <button className={styles.button}>View Inventory</button>
    // </div>
  )

};

export default NotificationBanner;
