import { useContext } from 'react'
import PropTypes from 'prop-types'
import Meal from './Meal/Meal'
import styles from './Meals.module.css'
import ThemeContext from '../../context/ThemeContext'
import { addRecipe } from '../../pages/Profile/Recipes/MyRecipes/AddRecipe/AddRecipe'
import { addRecipeContext } from '../../context/addRecipeContext'

function Meals(props) {
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext)

	return (
		<div className={styles.wrapper}>
			<div className={styles.containerMeals}>
				<p
					className={styles.text}
					style={{ color: isDarkMode ? themeDark.colors.textColor : themeLight.colors.textColor }}>
					Przepisy:
				</p>
				{props.state.meals.map(meal => (
					<Meal key={meal.id} {...meal} theme={props.theme} />
				))}
				<p>{props.state.namek}</p>
			</div>
		</div>
	)
}


export default Meals
