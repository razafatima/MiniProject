import React from 'react'
import NotificationBanner from '../notificationbanner/NotificationBanner';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
// import Images from '../landingpage/imagesdata';
import styles from '../styled/styled.module.css';
import MainBanner from '../Banners/mainbanner';
import steeringWheel from '../images/steeringwheel.png'; 

const FooterIcon = {

      "img": steeringWheel,
      "text": "Schedule a Drive Today",
};

export default function landingpage() {
  return (
    <div>
        <NotificationBanner />
        <Navbar />
        <MainBanner />
        <Footer/>


        <button className={`${styles.parentcontainer} ${styles.iconbutton}`}>
               <img src={FooterIcon.img} alt="footericon" className={styles.wheelicon}/>
               <h5 className={styles.heading}>{FooterIcon.text}</h5> 
        </button>
        
        {/* <div className={styles.parentcontainer}>
          <button className={styles.iconbutton}>
            <img src={Images.steeringwheel} alt="steering wheel" className={styles.wheelicon}/>
            <h5 className={styles.heading}>Schedule a Drive Today</h5>
          </button>
        </div> */}
    </div>
  )
}
