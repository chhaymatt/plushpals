import Rating from "../Rating/Rating";
import styles from "./Card.module.scss";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
	const heartStyle = data.isFav
		? styles.Heart__Filled
		: styles.Heart__NotFilled;
	const heartSymbol = data.isFav ? "♥" : "♡";
	return (
		<NavLink to={`/${data.id}`}>
			<div className={styles.Card}>
				<div className={styles.Top}>
					<div className={styles.Heart}>
						<div className={heartStyle}>{heartSymbol}</div>
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
						ratingsCount={data.reviews}></Rating>
					<p className={styles.Content__Price}>
						From ${data.price[0].toFixed(2)}
					</p>
				</div>
			</div>
		</NavLink>
	);
};

export default Card;
