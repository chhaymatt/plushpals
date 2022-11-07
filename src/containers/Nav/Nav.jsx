import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
	return (
		<nav className={styles.Bar}>
				<NavLink className={styles.Logo} to="/"></NavLink>
			<div className={styles.Container}>
				<NavLink className={styles.Link} to="/">
					Home
				</NavLink>
				<NavLink className={styles.Link} to="/products">
					Products
				</NavLink>
				<NavLink className={styles.Link} to="/favourites">
					Favourites
				</NavLink>
				<NavLink className={styles.Link} to="/bag">
					Bag
				</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
