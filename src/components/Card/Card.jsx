import Rating from "../Rating/Rating";
import styles from "./Card.module.scss";
import { NavLink } from "react-router-dom";
const Card = ({ data }) => {
	// const quantity = data.quantity && data.quantity.join(", ");
	// const variants = data.variants && data.variants.join(" | ");
	// const sizes = data.size && data.size.join(" | ");
	// const prices = data.price && data.price.join(", ");
	const heart = data.isFav ? styles.Heart__Filled : styles.Heart__NotFilled;
	return (
		<NavLink to={`/${data.id}`}>
			<div className={styles.Card}>
				<div className={styles.Top}>
					<div className={styles.Heart}>
						<div className={heart}>♥</div>
					</div>
					<img
						className={styles.Image}
						src={data.images[0]}
						alt={data.title}
						referrerPolicy="no-referrer"
					/>
				</div>
				<div className={styles.Content}>
					<p className={styles.Content__Title}>{data.title}</p>
					<Rating
						averageRating={data.reviewsAverage}
						ratingsCount={data.reviews}
					></Rating>
					<p className={styles.Content__Price}>
						From ${data.price[0]}
					</p>
					{/* <p>Variants: {variants}</p>
                <p>Sizes: {sizes}</p>
                <p>Prices: {prices}</p> */}
				</div>
			</div>
		</NavLink>
	);
};

export default Card;
