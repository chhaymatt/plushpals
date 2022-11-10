import Card from "../../components/Card/Card";
import styles from "./ProductList.module.scss";

const ProductList = ({ isFavourites, products, error }) => {
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
