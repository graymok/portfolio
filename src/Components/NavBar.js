import styles from '../CSS/NavBar.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo512.png'

// Component for page navigation

const NavBar = () => {

    const logoAlt = 'Website logo'

    return (
        <nav className={styles.container}>
            <div className={styles.left}>
                <NavLink exact to='/'>
                    <img src={logo} className={styles.logo} alt={logoAlt} />
                </NavLink>
            </div>
            <div className={styles.right}>
                <NavLink className={styles.navLink} activeClassName={styles.activeLink} exact to='/'>About Tim</NavLink>
                <NavLink className={styles.navLink} activeClassName={styles.activeLink} to='/projects'>Projects</NavLink>
            </div>
        </nav>
    )
}


export default NavBar