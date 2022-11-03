import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import { useState, useEffect } from "react";
import ToggleBar from "../ToggleBar/ToggleBar";
import Rating from "../Rating/Rating";
import styles from "./Product.module.scss";
import Divider from "../Divider/Divider";
const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [count, setCount] = useState(0);
	const [priceIndex, setPriceIndex] = useState(0);

	const initialState = {};

	const [formState, setFormState] = useState(initialState);

	useEffect(() => {
		getProductById(id)
			.then((data) => setProduct(data))
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);

	const onInputChange = (event) => {
		const { name, value } = event.target;
		setFormState({ ...formState, [name]: value });
	};

	useEffect(() => {
		if (formState.size == "small") {
            setPriceIndex(0);
        } else if (formState.size == "medium") {
            setPriceIndex(1);
        } else if (formState.size == "large") {
            setPriceIndex(2);
        } else if (formState.size == "extra-large") {
            setPriceIndex(3);
        }
	}, [formState]);

	// setInterval(() => {
	// 	setCount(count + 1);
	// }, 2000);

	return (
		product && (
			<div className={styles.Product}>
				<div className={styles.Picture}>
					<img
						className={styles.Picture__ImageMain}
						src={product.images[count]}
					></img>
					{product.images.map((image, index) => (
						<img
							key={index}
							className={styles.Picture__Image}
							src={image}
							alt={product.title}
						/>
					))}
				</div>
				<div className={styles.Content}>
					<h1 className={styles.Content__Title}>{product.title}</h1>
					<Rating
						averageRating={product.reviewsAverage}
						ratingsCount={product.reviews}
					></Rating>
					<ToggleBar
						name="variant"
						nameDisplay="Variant"
						options={product.variants}
						onInputChange={onInputChange}
					></ToggleBar>
					<ToggleBar
						name="size"
						nameDisplay="Size"
						options={product.size}
						onInputChange={onInputChange}
					></ToggleBar>
					<div className={styles.Content__Price}>
						<p>Price</p>
						<h2>${product.price[priceIndex]}</h2>
					</div>
                    <button>Add to cart</button>
					<Divider></Divider>
                    <p>TODO: Store specifications as a field to each product rather than in description</p>
                    <p>TODO: Remove colouring from HTML because it breaks light/dark mode</p>
					<div
						className={styles.Content__Description}
						dangerouslySetInnerHTML={{
							__html: product.description
								? product.description
								: "No description",
						}}
					></div>
				</div>
			</div>
		)
	);
};

export default Product;
