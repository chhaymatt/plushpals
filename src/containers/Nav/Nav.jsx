import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = ({ bagCount }) => {
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
