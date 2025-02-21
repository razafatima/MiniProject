import { Fragment } from "react";
import styles from '../styled/styled.module.css'

const footer = () =>{
    
    const footerItems =[
        "Tesla © 2025",
        "Privacy & Legal",
         "Vehicle Recalls",
         "Contact",
          "News",
          "Get Updates",
          "Locations",
    ];

    return(
            <Fragment>
                <footer className={`${styles.footer} ${styles.footerul}`}>
                    {footerItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
        </footer>

            </Fragment>

    );
};
export default footer;