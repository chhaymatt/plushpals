import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Nav.scss"

const NavBar = ({ bagCount }) => {
    const [showNavMenu, setShowNavMenu] = useState(false)

    const handleNav = () => setShowNavMenu(!showNavMenu)
    const handleCloseNav = () => setShowNavMenu(false)

    return (
        <>
            <nav className="NavBar">
                <NavLink to="/" className="Logo" onClick={handleCloseNav}>
                    PlushPals
                </NavLink>
                <div className="MenuIcon" onClick={handleNav}>
                    <i
                        className={showNavMenu ? "fas fa-times" : "fas fa-bars"}
                    />
                </div>
                <ul className={showNavMenu ? "Menu active" : "Menu"}>
                    <li className="Item">
                        <NavLink
                            to="/"
                            className="Link"
                            onClick={handleCloseNav}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="Item">
                        <NavLink
                            to="/products"
                            className="Link"
                            onClick={handleCloseNav}
                        >
                            Products
                        </NavLink>
                    </li>
                    <li className="Item">
                        <NavLink
                            to="/favourites"
                            className="Link"
                            onClick={handleCloseNav}
                        >
                            Favourites
                        </NavLink>
                    </li>
                    <li className="Item">
                        <NavLink
                            to="/bag"
                            className="Link"
                            onClick={handleCloseNav}
                        >
                            <div>Bag</div>
                            {bagCount > 0 && (
                                <div className="Badge">{bagCount}</div>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
