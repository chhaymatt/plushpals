import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
	return (
		<nav className={styles.Bar}>
			<NavLink className={styles.Link} to="/">
				Home
			</NavLink>
			<NavLink className={styles.Link} to="/products">
				Products
			</NavLink>
            <NavLink className={styles.Link} to="/favourites">
				Favourites
			</NavLink>
            <NavLink className={styles.Link} to="/cart">
				Cart
			</NavLink>
		</nav>
	);
};

export default Nav;
