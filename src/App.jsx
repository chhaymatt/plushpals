import { BrowserRouter, Route, Routes } from "react-router-dom";
import BagList from "./components/BagList/BagList";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Nav from "./containers/Nav/Nav";
import ProductList from "./containers/ProductList/ProductList";
import Carousel from "./containers/Carousel/Carousel";
import styles from "./styles/App.module.scss";

const App = () => {
	const slides = [
		{
			url: "https://i.imgur.com/ArNsn6z.jpg",
			title: "Avo the Adorable Avocado",
			linkTo: "EyhvV4uEMl94pUEuJ2lK",
		},
		{
			url: "https://i.imgur.com/V7IyKAR.png",
			title: "Boba",
			linkTo: "EyhvV4uEMl94pUEuJ2lK",
		},
		{
			url: "https://i.imgur.com/lVQDez7.jpg",
			title: "Curious Cat",
			linkTo: "2JdQzGJmF7KaAxml3CSe",
		},
	];

	const containerStyles = {
		width: "500px",
		height: "280px",
		margin: "0 auto",
	};

	return (
		<>
			<BrowserRouter>
				<Nav />

				<Routes>
					<Route
						path="/"
						element={
							<>
								<Carousel
									style={containerStyles}
									slides={slides}
								/>
								<div className={styles.Container}>
									<ProductList />
								</div>
							</>
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
