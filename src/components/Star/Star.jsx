import styles from "./Star.module.scss";

const Star = ({ averageRating }) => {
	// Calculate the number of stars to be filled. 1 Star = 20 pixels. 5 Stars = 100 pixels
	const starsFilled = (averageRating / 5) * 100;
	return (
		<div className={styles.Stars}>
			<div
				className={styles.Stars__Filled}
				style={{ width: starsFilled }}
			></div>
		</div>
	);
};

export default Star;
