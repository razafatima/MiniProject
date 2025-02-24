import { Fragment } from "react";
import styles from '../styled/styled.module.css';
import Buttongroup from "../Button/buttongroup";
import bannerdata from '../utils/bannerdata';
import footerdata from '../footer/footerdata';
import Blackbtngroup from "../Button/blackbtngroup";
import cybertruckname from '../images/cybertruck.png';


const MainBanner = () => {
    return(
         <Fragment>

                {/* Banners */}
              {bannerdata.map((item) => (
                <div key={item.id} className={styles.imgContainer}>
                  <img src={item.img} alt="firstbanner" className={styles.img}/>
                  <h1>{item.title}</h1>

                  {item.id === 4 && (
                    <img src={cybertruckname} alt="cybertruck name" className={styles.cybertruck}/>
                  )}
                  {/* Check Links */}
                  {item.links ? (
                  item.links.main && item.links.main.href ? (
                  <a href={item.links.main.href} className={styles.leasing}>{item.links.main.text}</a>
                  ) : item.links.href ? (
                  <a href={item.links.href} className={styles.leasing}>{item.links.text}</a>
                  ) : item.links.primary ? (
                    <a href={item.links.primary.href}  className={styles.textleasing}>{item.links.primary.text}</a>
                  ): item.links.link ? (
                    <a href={item.links.link.href} className={styles.textlease}>{item.links.link.text}</a>
                  ) : item.links.primarylink ? (
                    <a href={item.links.primarylink.href} className={styles.textlease}>{item.links.primarylink.text}</a>  
                  ) : item.links.solarlink ? (
                    <a href={item.links.solarlink.href} className={styles.textsolar}>{item.links.solarlink.text}</a>  
                  ) :null
                  ) : null}

                  {item.subText ? (
                    <h4 className={styles.bannertext}>
                      {item.subText.text}
                    <sup>{item.subText.supText}</sup>
                    {item.subText.afterText}
                    </h4>):(
                        item.text && <h3>{item.text}</h3> 
                    )}

                {item.id === 4 ? (
                    <Blackbtngroup />
                ):(
                    <>
                    <Buttongroup btns/>
                    <Buttongroup />
                    </>
                )}
                </div>
                 ))}

              <section className={styles.section}>
                 <p className={styles.p}>
                <sup>{footerdata.text1.sup}</sup>
                {footerdata.text1.content}
                <br />
                <br />
                <sup>{footerdata.text2.sup}</sup>
                {footerdata.text2.content}
            </p>
        </section>              
         </Fragment>
    );
}
export default MainBanner;