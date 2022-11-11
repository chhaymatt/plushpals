import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = ({ bagCount }) => {
	return (
		<nav className={styles.Bar}>
			<NavLink className={styles.Logo} to="/plushpals"></NavLink>
			<div className={styles.Container}>
				<NavLink className={styles.Link} to="/plushpals">
					Home
				</NavLink>
				<NavLink className={styles.Link} to="/plushpals/products">
					Products
				</NavLink>
				<NavLink className={styles.Link} to="/plushpals/favourites">
					Favourites
				</NavLink>
				<NavLink className={styles.Link} to="/plushpals/bag">
					<p>Bag</p>
					{bagCount > 0 && (
						<div className={styles.Badge}>{bagCount}</div>
					)}
				</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
