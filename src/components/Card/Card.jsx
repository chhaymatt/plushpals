import Rating from "../Rating/Rating"
import styles from "./Card.module.scss"
import { NavLink } from "react-router-dom"

const Card = ({ data }) => {
    const heartColour = data.isFav ? "red" : "none"

    return (
        <NavLink to={`/${data.id}`}>
            <div className={styles.Card}>
                <div className={styles.Top}>
                    <div className={styles.Heart}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2rem"
                                height="2rem"
                                fill={heartColour}
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill="evenodd"
                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                                />
                            </svg>
                        </div>
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
                        From ${data.price[0].toFixed(2)}
                    </p>
                </div>
            </div>
        </NavLink>
    )
}

export default Card
