import { useEffect, useState } from 'react';
import styles from '../styled/styled.module.css'

const Navbar = () =>{
const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() =>{
   const handleScroll = () =>{
           const isScrolled = window.scrollY > 10;
           setScrolled(isScrolled);
   };
    window.addEventListener("scroll",handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);

},[]);

const handleVehiclesClick = (e) => {
  e.preventDefault();
  setMenuOpen(!menuOpen);
};

const handleNavigate = () => {
  setMenuOpen(false);
  window.location.href = "#vehicles";
};

     return(
           <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            
            <div className={styles.navbarleft}>
               
               <a href="/" className={styles.logo}>Tesla</a>
            </div>
            <div className={styles.navbarcenter}>
               <a href="#vehicles" onClick={handleVehiclesClick}>Vehicles</a>
               <a href="#energy">Energy</a>
               <a href="#charging">Charging</a>
               <a href="#discover">Discover</a>
               <a href="#shop">Shop</a>
             </div>


             {menuOpen && (
        <div className={styles.dropdownMenu}>
          <a href="/vehicles" onClick={handleNavigate} className={styles.menuText}>Go to Vehicles
           </a>
        </div>
      )}


             <div className={styles.navbarright}>
               <button className={styles.iconsbutton}>
               <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icons}>
                <circle cx="12" cy="12" r="10"></circle>
               <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
               <line x1="12" y1="17" x2="12" y2="17"></line>
             </svg>
               </button>
               <button className={styles.iconsbutton}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icons}>
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M2 12h20"></path>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </button>
        <button className={styles.iconsbutton}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className={styles.icons}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>
             </div>
             
         </nav>
     );
};
export default Navbar;