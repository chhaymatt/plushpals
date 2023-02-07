import styles from "./ToggleBar.module.scss"

const ToggleBar = ({ name, nameDisplay, options, onInputChange }) => {
    return (
        <div className={styles.ToggleBar}>
            <h4>{nameDisplay}</h4>
            <select
                className={styles.ToggleBar__Dropdown}
                onChange={onInputChange}
                name={name}
            >
                {options.map((element, index) => (
                    <option key={index} value={element}>
                        {element.charAt(0).toUpperCase() + element.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ToggleBar
