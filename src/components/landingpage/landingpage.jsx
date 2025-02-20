import React from 'react'
import NotificationBanner from '../notificationbanner/NotificationBanner'
import Navbar from '../navbar/navbar'
import Banners from '../Banners/banners'
import Footer from '../footer/footer'
import Images from '../landingpage/imagesdata'
import styles from '../styled/styled.module.css'



export default function landingpage() {
  return (
    <div>
        <NotificationBanner />
        <Navbar />
        <Banners />
        <Footer/>
        
        <div className={styles.parentcontainer}>
          <button className={styles.iconbutton}>
            <img src={Images.steeringwheel} alt="steering wheel" className={styles.wheelicon}/>
            <h5 className={styles.heading}>Schedule a Drive Today</h5>
          </button>
        </div>
    </div>
  )
}
