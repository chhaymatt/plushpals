import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Nav from "./containers/Nav/Nav";
import ProductList from "./containers/ProductList/ProductList";
import styles from "./styles/App.module.scss";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Nav />

				<Routes>
					<Route
						path="/"
						element={
							<div className={styles.Container}>
								<h1 className={styles.Heading}>Home</h1>
								<ProductList />
							</div>
						}
					/>

					<Route
						path="/products"
						element={
							<div className={styles.Container}>
								<h1 className={styles.Heading}>Products</h1>
								<ProductList />
							</div>
						}
					/>

					<Route
						path="/favourites"
						element={
							<div className={styles.Container}>
								<h1 className={styles.Heading}>Favourites</h1>
								<p>TODO: Filter cards based on isFav</p>
								<ProductList />
							</div>
						}
					/>

					<Route
						path="/cart"
						element={
							<div className={styles.Container}>
								<h1 className={styles.Heading}>Cart</h1>
								<p>TODO: Use context?</p>
								<p> In Progress</p>
							</div>
						}
					/>

					<Route path="/:id" element={<Product />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
};

export default App;
