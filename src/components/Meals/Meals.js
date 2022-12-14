import { useContext } from 'react'
import PropTypes from 'prop-types'
import Meal from './Meal/Meal'
import styles from './Meals.module.css'
import ThemeContext from '../../context/ThemeContext'

function Meals(props) {
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext)

	return (
		<div className={styles.container}>
			<p
				className={styles.text}
				style={{ color: isDarkMode ? themeDark.colors.textColor : themeLight.colors.textColor }}>
				Przepisy:
			</p>
			{props.meals.map(meal => (
				<Meal key={meal.id} {...meal} theme={props.theme} />
			))}
		</div>
	)
}
Meals.propTypes = {
	meals: PropTypes.array.isRequired,
}

export default Meals
