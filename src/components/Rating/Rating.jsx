import Star from "../Star/Star";
import styles from "./Rating.module.scss";

const Rating = ({ averageRating, ratingsCount }) => {
	return (
		<div className={styles.Rating}>
			<Star averageRating={averageRating}></Star>
			<p className={styles.Rating__Text}>
				{averageRating} ({ratingsCount})
			</p>
		</div>
	);
};

export default Rating;
