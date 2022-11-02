import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { getProducts } from "../../services/products";
import styles from "./ProductList.module.scss";

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts().then((products) => setProducts(products));
	}, []);

	return (
		<div className={styles.ProductList}>
			{products.map((data) => (
				<Card key={data.id} data={data} />
			))}
		</div>
	);
};

export default ProductList;
