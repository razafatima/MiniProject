import { Fragment } from "react";
import styles from '../styled/styled.module.css'

const footer = () =>{

    return(
            <Fragment>
                <footer className={styles.footer}>
            <nav className={styles.footernav}>
                <ul className={styles.footerul}>
                    <li>Tesla © 2025</li>
                    <li>Privacy & Legal</li>
                    <li>Vehicle Recalls</li>
                    <li>Contact</li>
                    <li>News</li>
                    <li>Get Updates</li>
                    <li>Locations</li>
                </ul>
            </nav>
        </footer>

            </Fragment>

    );
};
export default footer;