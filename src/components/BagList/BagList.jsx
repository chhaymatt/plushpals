import BagCard from "../BagCard/BagCard";
import styles from "./BagList.module.scss";
import { NavLink } from "react-router-dom";

const BagList = ({ bagItems, error, setChanged }) => {
	return (
		<div className={styles.BagList}>
			{bagItems.length > 0 ? (
				bagItems.map((data) => (
					<BagCard
						setChanged={setChanged}
						key={data.id}
						data={data}
					/>
				))
			) : (
				<div>
					There are no items in the bag,&nbsp;
					<NavLink className={styles.Link} to="/products">
						want to see products?
					</NavLink>
				</div>
			)}
			{error && (
				<p className={styles.Error}>
					There seems to be a problem, error: {error}
				</p>
			)}
		</div>
	);
};

export default BagList;
