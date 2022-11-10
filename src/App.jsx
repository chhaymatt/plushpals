import { BrowserRouter, Route, Routes } from "react-router-dom";
import BagList from "./components/BagList/BagList";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Nav from "./containers/Nav/Nav";
import ProductList from "./containers/ProductList/ProductList";
import Carousel from "./components/Carousel/Carousel";
import styles from "./styles/App.module.scss";
import { getProducts } from "./services/products";
import { useState, useEffect } from "react";

const App = () => {
	const containerStyles = {
		width: "500px",
		height: "280px",
		margin: "0 auto",
	};

	const [products, setProducts] = useState([]);
	const [error, setError] = useState();
	const [bagItems, setBagItems] = useState([]);
	const [isChanged, setChanged] = useState(false);

	useEffect(() => {
		getProducts("products")
			.then((products) => setProducts(products))
			.catch((err) => setError(Object.values(err)[0]));
	}, []);

	useEffect(() => {
		getProducts("bag")
			.then((bagItems) => setBagItems(bagItems))
			.catch((err) => setError(Object.values(err)[0]));
	}, [isChanged]);

	return (
		<>
			<BrowserRouter>
				<Nav bagCount={bagItems.length} />

				<Routes>
					<Route
						path="/"
						element={
							<>
								<Carousel
									style={containerStyles}
									products={products}
								/>
								<div className={styles.Container}>
									<ProductList
										products={products}
										error={error}
									/>
								</div>
							</>
						}
					/>

					<Route
						path="/products"
						element={
							<div className={styles.Container}>
								<h1 className={styles.Heading}>Products</h1>
								<ProductList
									products={products}
									error={error}
								/>
							</div>
						}
					/>

					<Route
						path="/favourites"
						element={
							<div className={styles.Container}>
								<h1 className={styles.Heading}>Favourites</h1>
								<ProductList
									isFavourites={true}
									products={products}
									error={error}
								/>
							</div>
						}
					/>

					<Route
						path="/bag"
						element={
							<div className={styles.Container}>
								<h1 className={styles.Heading}>
									Bag{" "}
									{bagItems.length > 0 && (
										<div className={styles.Badge}>
											{bagItems.length}
										</div>
									)}
								</h1>
								<BagList
									bagItems={bagItems}
									error={error}
									setChanged={setChanged}
								/>
							</div>
						}
					/>

					<Route
						path="/:id"
						element={<Product setChanged={setChanged} />}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
};

export default App;
