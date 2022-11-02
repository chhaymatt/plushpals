import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import { useState, useEffect } from "react";
import ToggleBar from "../ToggleBar/ToggleBar";
import Rating from "../Rating/Rating";
import styles from "./Product.module.scss";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [count, setCount] = useState(0);

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

	setInterval(() => {
		setCount(count + 1);
		console.log(count);
	}, 2000);

	if (product && count == product.images.length - 1) {
		setCount(0);
	}

	return (
		<div>
			{product && (
				<>
					<h1>{product.title}</h1>
					<img
						className={styles.Image}
						src={product.images[count]}
						alt={product.title}
					></img>
					<Rating
						averageRating={product.reviewsAverage}
						ratingsCount={product.reviews}
					></Rating>
					<ToggleBar
						name="size"
						nameDisplay="Size"
						options={product.size}
						onInputChange={onInputChange}
					></ToggleBar>

					<ToggleBar
						name="variant"
						nameDisplay="Variant"
						options={product.variants}
						onInputChange={onInputChange}
					></ToggleBar>
					<div
						className={styles.Description}
						dangerouslySetInnerHTML={{
							__html: product.description
								? product.description
								: "No description",
						}}
					></div>
				</>
			)}
		</div>
	);
};

export default Product;
