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
								<h1>Home</h1>
                <ProductList />
							</>
						}
					/>
					<Route
						path="/favourites"
						element={
							<>
								<h1>Favourites</h1>
								<ProductList />
							</>
						}
					/>
					<Route
						path="/cart"
						element={
							<>
								<h1>Cart</h1>
								<ProductList />
							</>
						}
					/>
					<Route path="products/:id" element={<Product />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
};

export default App;
