import styles from "./Carousel.module.scss";
import { useState } from "react";

const Carousel = () => {
	const [image, setImage] = useState();
	const images = [
		"https://i.imgur.com/ArNsn6z.jpg",
		"https://i.imgur.com/V7IyKAR.png",
		"https://i.imgur.com/lVQDez7.jpg",
	];
	const [i, setI] = useState(0);

	setInterval(() => {
		setImage(images[i]);
		console.log(i);
		if (i < images.length - 1) {
			setI(i + 1);
		} else {
			setI(0);
		}
	}, 5000);

	return (
		<div className={styles.Carousel}>
			<img
				className={styles.Image}
				src={image}
				alt=""
				referrerPolicy="no-referrer"
			/>
		</div>
	);
};

export default Carousel;
