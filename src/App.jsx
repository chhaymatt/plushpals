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
							<>
								<h1 className={styles.Heading}>Home</h1>
								<p>TODO: Full-width Banner</p>
								<p>
									TODO: Make favourite buttons interactable
									and updated with database
								</p>
								<ProductList />
							</>
						}
					/>

					<Route
						path="/products"
						element={
							<>
								<h1 className={styles.Heading}>Products</h1>
								<p>
									TODO: Fix extra /product, maybe duplicate
									ProductList component?
								</p>
								<ProductList />
							</>
						}
					/>

					<Route
						path="/favourites"
						element={
							<>
								<h1 className={styles.Heading}>Favourites</h1>
								<p>TODO: Filter cards based on isFav</p>
								<ProductList />
							</>
						}
					/>

					<Route
						path="/cart"
						element={
							<>
								<h1 className={styles.Heading}>Cart</h1>
								<p>TODO: Use context?</p>
								<p> In Progress</p>
							</>
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
