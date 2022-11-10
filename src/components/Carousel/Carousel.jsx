import { useState } from "react";
import styles from "./Carousel.module.scss";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Carousel = ({ products }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [featured, setFeatured] = useState([]);

	// Hard coded images
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

	// Diagnostics
	useEffect(() => {
		products.map((product) => {
			// Diagnostics
			if (product.isFeatured) {
				console.log(product.title, product.isFeaturedImage, product.id);
			}

			if (product.isFeatured) {
				setFeatured([
					...featured,
					{
						title: product.title,
						url: product.isFeaturedImage,
						linkTo: product.id,
					},
				]);
			}
		});
	}, [products]);

	// Clicking on the back button
	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	// Clicking on the forward button
	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	// Clicking on one of a specific dot
	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div className={styles.Carousel}>
			<div className={styles.ArrowLeft} onClick={goToPrevious}>
				❰
			</div>
			<div className={styles.ArrowRight} onClick={goToNext}>
				❱
			</div>
			<div
				style={{
					backgroundImage: `url(${slides[currentIndex].url})`,
				}}
				className={styles.Slide}>
				<NavLink to={`/${slides[currentIndex].linkTo}`}>
					<div
						className={
							styles.Info
						}>{`${slides[currentIndex].title}`}</div>
				</NavLink>
				<div className={styles.Dots}>
					{slides.map((slide, slideIndex) => (
						<div
							key={slideIndex}
							className={styles.Dots__Symbols}
							style={{
								color:
									slideIndex === currentIndex
										? "#FFB502"
										: "#f8f8f8",
							}}
							onClick={() => goToSlide(slideIndex)}>
							•
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
