import styles from "./BagCard.module.scss"
import { deleteBagItemById } from "../../services/products"
import { NavLink } from "react-router-dom"
const BagCard = ({ data, setChanged }) => {
    // Remove item from bag
    const onDeleteButtonClick = () => {
        console.log(`Removed bag ID ${data.id}`)
        deleteBagItemById(data.id).then(() =>
            setChanged((isChanged) => !isChanged)
        )
    }

    return (
        <div className={styles.BagCard}>
            <img src={data.image} className={styles.Image}></img>
            <div className={styles.Content}>
                <div className={styles.Top}>
                    <NavLink className={styles.Link} to={`/${data.productId}`}>
                        <h2>{data.title}</h2>
                    </NavLink>
                    <h2>${data.quantity * data.price}</h2>
                </div>
                <div className={styles.Bottom}>
                    <div>
                        <div>
                            {data.variant} & {data.size}
                        </div>
                        <div>Qty: {data.quantity}</div>
                        <div>${data.price}/item</div>
                        <p>Diagnostics</p>
                        <div>Product ID: {data.productId}</div>
                        <div>Bag ID: {data.id}</div>
                    </div>
                    <div
                        className={styles.Remove}
                        onClick={onDeleteButtonClick}
                    >
                        Remove
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BagCard
