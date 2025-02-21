import { Fragment } from "react";
import styles from '../styled/styled.module.css'
import Images from '../landingpage/imagesdata'
// import ButtonBlack from '../Button/ButtonBlack'
import Buttongroup from "../Button/buttongroup";
import Blackbtngroup from '../Button/blackbtngroup';
// import banner from '../Banners/banner';


const Banners = ({image, title, link, subText}) =>{


 
    return(
            <Fragment>
              <div className={styles.imgContainer}>  
              {/* <img src={Images.frontbanner} alt="firstbanner" className={styles.img}/>
              <h1>Model Y</h1>
              <a href="#leasing" className={styles.leasing}>$299/mo Leasing</a>
              <h4 className={styles.bannertext}>From $31,490<sup>1</sup>After Est. Savings</h4> */}
              <img 
              src={image}
              alt={title}
              className={styles.img}/>
              <h1>{title}</h1>
              {link && (
                <a href={link.href} className={styles.leasing}>
                  {link.text}
                </a>
              )}
              {subText && (
                <h4 className={styles.bannertext}>
                  {subText.text}
                  {subText.supText && <sup>{subText.supText}</sup>}
                  {subText.afterText}
                </h4>

              )}
              <Buttongroup btns/>
               <Buttongroup />
          </div>

          <div className={styles.imgContainer}>
              <img src={Images.secondbanner} alt="secondbanner" className={styles.img}/>
              <h1 style={{ fontSize: '60px' }}>New Model Y</h1>
              <h3>Deliveries Begin in March</h3>
              <Buttongroup btns />
              <Buttongroup />
          </div>

          <div className={styles.imgContainer}>
            <img src={Images.thirdbanner} alt="thirdbanner" className={styles.img}/>
            <h1>Model 3</h1>
            <a href="#lease" className={styles.lease}>$249/mo Lease Ending March 3</a>
            <Buttongroup btns />
              <Buttongroup />
          </div>

          <div className={styles.imgContainer}>
            <img src={Images.fourthbanner} alt="fourthbanner" className={styles.img}/>
            <img src={Images.cybertruck} alt="cybertruck" className={styles.cybertruck}/>
            <h3 style={{top: '30%'}}>$7,500 Federal Tax Credit Available</h3>
            <a href={"#text"} className={styles.textleasing}>$749/mo Leasing</a>
            <Blackbtngroup button/>
            <Blackbtngroup />
          </div>

          <div className={styles.imgContainer}>
            <img src={Images.fifthbanner} alt="fifthbanner" className={styles.img}/>
            <h1>Model X</h1>
            <h3>Free Supercharging Included</h3>
            <a href={"#text"} className={styles.textlease}>$1,149/mo Leasing</a>
            <Buttongroup btns />
            <Buttongroup />
          </div>

          <div className={styles.imgContainer}>
            <img src={Images.sixthbanner} alt="sixthbanner" className={styles.img}/>
            <h1>Model S</h1>
            <h3>Free Supercharging Included</h3>
            <a href={"#text"} className={styles.textlease1}>$998/mo Leasing</a>
            <Buttongroup btns />
            <Buttongroup />
          </div>

          <div className={styles.imgContainer}>
            <img src={Images.houseimg} alt="houseimg" className={styles.img}/>
            <h1>Solar Panels</h1>
            <a href={"#text"} className={styles.textsolar}>Schedule a Virtual Consultation</a>
            <Buttongroup btns />
            <Buttongroup />
          </div>

          <div className={styles.imgContainer}>
            <img src={Images.solarroof} alt="solarroof" className={styles.img}/>
            <h1>Solar Roof</h1>
            <h3 className={styles.textsolarroof}>Produce Clean Energy From Your Roof</h3>
            <Buttongroup btns />
            <Buttongroup />
          </div>

          <div className={styles.imgContainer}>
            <img src={Images.powerwall} alt="powerwall" className={styles.img}/>
            <h1>Powerwall</h1>
            <Buttongroup btns />
            <Buttongroup />
          </div>

          <div className={styles.imgContainer}>
            <img src={Images.accessories} alt="accessories" className={styles.img}/>
            <h1>Accessories</h1>
            <Buttongroup btns />
            <Buttongroup />

          </div>

          <section className={styles.section}>
              <p className={styles.p}>
                  <sup>1</sup>
                  Price before estimated savings is $46,630, including Destination and Order Fees, but excluding taxes and<br /> 
                  other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings<br /> 
                  includes $6,500 in <a href="/#" className={styles.link}>gas savings</a> estimated over five years, the $7,500 Federal Tax Credit 
                  and state<br /> incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers 
                  or finance <br />options will be eligible.<a href="/#" className={styles.link}>Terms apply</a>.
                  <br />
                  <br />
                  <sup>2</sup>
                  Price before estimated savings is $46,630, including Destination and Order Fees, but excluding taxes and<br /> 
                  other fees. Subject to change. Vehicle shown has upgrades that will increase the price. Estimated savings<br /> 
                  includes $6,500 in <a href="/#" className={styles.link}>gas savings</a> estimated over five years, the $7,500 Federal Tax Credit 
                  and state<br /> incentives, available to eligible buyers and subject to MSRP caps. Not all vehicles, customers 
                  or finance <br />options will be eligible.<a href="/#" className={styles.link}>Terms apply</a>.
              </p>
          </section>
          
            </Fragment>
    );
};
export default Banners; 