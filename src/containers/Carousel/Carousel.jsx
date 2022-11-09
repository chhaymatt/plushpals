import { useState } from "react";
import styles from "./Carousel.module.scss";
import { NavLink } from "react-router-dom";

const Carousel = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slideStyles = {
		width: "100%",
		height: "100%",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundImage: `url(${slides[currentIndex].url})`,
		display: "flex",
		flexDirection: "column",
		justifyContent: "end",
		alignItems: "center",
	};

	const activeStyle = {
		color: "red",
	};

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

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
			<div style={slideStyles}>
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
