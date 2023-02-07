import { useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.scss"

const NavBar = ({ bagCount }) => {
    const [showNavMenu, setShowNavMenu] = useState(false)

    const handleNav = () => setShowNavMenu(!showNavMenu)
    const handleCloseNav = () => setShowNavMenu(false)

    return (
        <>
            <nav className={styles.NavBar}>
                <NavLink
                    to="/"
                    className={styles.Logo}
                    onClick={handleCloseNav}
                >
                    {/* PlushPals */}
                </NavLink>
                <div className={styles.MenuIcon} onClick={handleNav}>
                    <i
                        className={showNavMenu ? `fas fa-times` : `fas fa-bars`}
                    />
                </div>
                <ul
                    className={
                        showNavMenu
                            ? `${styles.Menu} ${styles.active}`
                            : styles.Menu
                    }
                >
                    <li className={styles.Item}>
                        <NavLink
                            to="/"
                            className={styles.Link}
                            onClick={handleCloseNav}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.Item}>
                        <NavLink
                            to="/products"
                            className={styles.Link}
                            onClick={handleCloseNav}
                        >
                            Products
                        </NavLink>
                    </li>
                    <li className={styles.Item}>
                        <NavLink
                            to="/favourites"
                            className={styles.Link}
                            onClick={handleCloseNav}
                        >
                            Favourites
                        </NavLink>
                    </li>
                    <li className={styles.Item}>
                        <NavLink
                            to="/bag"
                            className={styles.Link}
                            onClick={handleCloseNav}
                        >
                            <div>Bag</div>
                            {bagCount > 0 && (
                                <div className={styles.Badge}>{bagCount}</div>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
