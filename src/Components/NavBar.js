import styles from '../CSS/NavBar.module.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo512.png'
import logoActive from '../Assets/logo512-alt.png'

const NavBar = () => {

    const logoAlt = 'Website logo'
    const [logoActive, setLogoActive] = useState(false)

    return (
        <nav className={styles.container}>
            <div className={styles.left}>
                <NavLink to='/'>
                    <img src={logo} className={styles.logo} alt={logoAlt} />
                </NavLink>
            </div>
            <div className={styles.right}>
                <NavLink className={styles.navLink} activeClassName={styles.activeLink} to='/about'>About</NavLink>
                <NavLink className={styles.navLink} activeClassName={styles.activeLink} to='/projects'>Projects</NavLink>
                <NavLink className={styles.navLink} activeClassName={styles.activeLink} to='/contact'>Contact</NavLink>
            </div>
        </nav>
    )
}


export default NavBar