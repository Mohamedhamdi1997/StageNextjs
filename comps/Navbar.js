import {React, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Nav.module.css';


//import {} from 'fa/react-icons';
const Navbar = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    const [isButtonVisible, setButtonVisible] = useState(false);
return (
    <>
<nav className={styles.navb}  >
<div className="logo">
<Image src='/logo.jpg' width={276} height={88} />
</div>
<Link href="#" className={styles.togglebutton} onClick={() => {
  setNavbarOpen(!isNavbarOpen);
  setButtonVisible(!isButtonVisible);
}}
>
    <span className={styles.bar}></span>
    <span className={styles.bar}></span>
    <span className={styles.bar}></span>
</Link>
<div className={isNavbarOpen ? `${styles.navbarlinks} ${styles.active}` : styles.navbarlinks}>
<ul>
<li>
<Link href="/">Home</Link>
</li>
<li>
<Link href="/About">About</Link>
</li>
<li>
<Link href="/Teams">Teams</Link>
</li>
<li>
<Link href="/Projects">Projects</Link>
</li>
<li>
<Link href="/Events">Events</Link>
</li>
<li>
<Link href="/Contact">Contact</Link>
</li>
</ul>
</div>
<div className={isButtonVisible ? `${styles.navb.btnContainer} ${styles.active}` : styles.btnContainer}>
<p className={styles.btn1}>Login</p>
<Link href="/register"><p className={styles.btn2}>Register</p></Link>
</div>
</nav>
</>
);
};
export default Navbar;