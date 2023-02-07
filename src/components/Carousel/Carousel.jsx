import { useState } from "react"
import styles from "./Carousel.module.scss"
import { NavLink } from "react-router-dom"
import { useEffect } from "react"

const Carousel = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [featured, setFeatured] = useState([])

    useEffect(() => {
        products.map((product) => {
            if (product.isFeatured) {
                setFeatured((featured) => [
                    ...featured,
                    {
                        title: product.title,
                        linkTo: product.id,
                        url: product.isFeaturedImage,
                    },
                ])
            }
        })
    }, [products])

    // Clicking on the back button
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? featured.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    // Clicking on the forward button
    const goToNext = () => {
        const isLastSlide = currentIndex === featured.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    // Clicking on one of a specific dot
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        featured.length > 0 && (
            <div className={styles.Carousel}>
                <div className={styles.ArrowLeft} onClick={goToPrevious}>
                    ❰
                </div>
                <div className={styles.ArrowRight} onClick={goToNext}>
                    ❱
                </div>
                <div
                    style={{
                        backgroundImage: `url(${featured[currentIndex].url})`,
                    }}
                    className={styles.Slide}
                >
                    <NavLink to={`/plushpals/${featured[currentIndex].linkTo}`}>
                        <div
                            className={styles.Info}
                        >{`${featured[currentIndex].title}`}</div>
                    </NavLink>
                    <div className={styles.Dots}>
                        {featured.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                className={styles.Dots__Symbols}
                                style={{
                                    color:
                                        slideIndex === currentIndex
                                            ? "#69f2a8"
                                            : "#f8f8f8",
                                }}
                                onClick={() => goToSlide(slideIndex)}
                            >
                                •
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    )
}

export default Carousel
