import { useState, useEffect } from "react";
import BagCard from "../BagCard/BagCard";
import { getProducts } from "../../services/products";
import styles from "./BagList.module.scss";
import { NavLink } from "react-router-dom";

const BagList = () => {
	const [bagItems, setBagItems] = useState([]);

	useEffect(() => {
		getProducts("bag").then((bagItems) => setBagItems(bagItems));
	}, [bagItems]);

	return (
		<div className={styles.BagList}>
			{bagItems.length > 0 ? (
				bagItems.map((data) => <BagCard key={data.id} data={data} />)
			) : (
				<div>
					No items in the bag, want to see products?
					<NavLink className={styles.Link} to="/products">
						Click here.
					</NavLink>
				</div>
			)}
		</div>
	);
};

export default BagList;
