import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import { useState, useEffect } from "react";
import ToggleBar from "../ToggleBar/ToggleBar";
import Rating from "../Rating/Rating";
import styles from "./Product.module.scss";
import Divider from "../Divider/Divider";
import Fav from "../Fav/Fav";
const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState("");
	const [error, setError] = useState("");
	const [price, setPrice] = useState("N/A");
	const [quantity, setQuantity] = useState("N/A");

	const initialState = {
		variant: "Loading Variant",
		size: "Loading Size",
	};

	const [formState, setFormState] = useState(initialState);

	useEffect(() => {
		getProductById(id)
			.then((data) => {
				setProduct(data);
				setFormState({
					...formState,
					variant: data.variants[0],
					size: data.size[0],
				});
			})
			.catch((err) => setError(err.message));
	}, []);

	useEffect(() => {
		// product &&
		// 	console.log(
		// 		`${formState.variant}, ${formState.size}, $${
		// 			product.variant[formState.variant][formState.size].quantity
		// 		}, Qty: ${
		// 			product.variant[formState.variant][formState.size].quantity
		// 		} ${Object.keys(product.variant[formState.variant])}`
		// 	);
		product &&
			setPrice(
				product.variant[formState.variant][
					formState.size
				].price.toFixed(2)
			);
		product &&
			setQuantity(
				product.variant[formState.variant][formState.size].quantity
			);
	}, [formState]);

	const onInputChange = (event) => {
		const { name, value } = event.target;
		setFormState({ ...formState, [name]: value });
	};
	//Object.keys(product.variant[formState.variant]) replace as prop option
	// if (product) {
	// 	console.log(Object.keys(product.variant[formState.variant]));
	// }
	return (
		product && (
			<div className={styles.Container}>
				<div className={styles.Product}>
					<div className={styles.Picture}>
						<img
							className={styles.Picture__ImageMain}
							src={product.images[0]}></img>
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
						{product.isFav && <Fav />}
						<h1 className={styles.Content__Title}>
							{product.title}
						</h1>
						<Rating
							averageRating={product.reviewsAverage}
							ratingsCount={product.reviews}></Rating>
						<ToggleBar
							name="variant"
							nameDisplay="Variant"
							options={product.variants}
							onInputChange={onInputChange}></ToggleBar>
						<ToggleBar
							name="size"
							nameDisplay="Size"
							options={product.size}
							onInputChange={onInputChange}></ToggleBar>
						<div className={styles.Content__Split}>
							<h3>In Stock</h3>
							{<h3>{quantity}</h3>}
						</div>
						<div className={styles.Content__Split}>
							<h3>Price</h3>
							<h2>${price}</h2>
						</div>
						<button>Add to Bag</button>
						<Divider></Divider>
						<h2 className={styles.Content__Subheading}>
							Product Information
						</h2>
						<div className={styles.Content__Split}>
							<h3>Overview</h3>
						</div>
						<div
							className={styles.Content__Description}
							dangerouslySetInnerHTML={{
								__html: product.description
									? product.description
									: "No description",
							}}></div>
						<Divider></Divider>
						<h2 className={styles.Content__Subheading}>
							Specifications
						</h2>
						<div className={styles.Content__Split}>
							<h3>Materials</h3>
							<p>{product.material}</p>
						</div>
						<div className={styles.Content__Split}>
							<h3>Variants</h3>
							<p>{product.variants.join(", ")}</p>
						</div>
						<div className={styles.Content__Split}>
							<h3>Sizes</h3>
							<p>{product.size.join(", ")}</p>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default Product;
