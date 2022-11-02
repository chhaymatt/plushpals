import styles from "./ToggleBar.module.scss";

const ToggleBar = ({ name, nameDisplay, options, onInputChange }) => {
	return (
		<div className={styles.ToggleBar}>
			<div className={styles.ToggleBar__Name}>{nameDisplay}</div>
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
	);
};

export default ToggleBar;
