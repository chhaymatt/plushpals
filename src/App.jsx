import { BrowserRouter, Route, Routes } from "react-router-dom";
import BagList from "./components/BagList/BagList";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Nav from "./containers/Nav/Nav";
import ProductList from "./containers/ProductList/ProductList";
import Carousel from "./containers/Carousel/Carousel";
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
								<Carousel />
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
								<ProductList isFavourites={true} />
							</div>
						}
					/>

					<Route
						path="/bag"
						element={
							<div className={styles.Container}>
								<h1 className={styles.Heading}>Bag</h1>
								<BagList />
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
