import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { getProducts } from "../../services/products";
import styles from "./ProductList.module.scss";

const ProductList = ({ isFavourites }) => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState();

	useEffect(() => {
		getProducts("products")
			.then((products) => setProducts(products))
			.catch((err) => setError(Object.values(err)[0]));
	}, []);

	return (
		<div className={styles.ProductList}>
			{error && (
				<p className={styles.Error}>
					There seems to be a problem, error: {error}
				</p>
			)}
			{products.map((data) =>
				isFavourites ? (
					data.isFav && <Card key={data.id} data={data} />
				) : (
					<Card key={data.id} data={data} />
				)
			)}
		</div>
	);
};

export default ProductList;
