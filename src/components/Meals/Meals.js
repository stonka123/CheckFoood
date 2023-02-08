import { useContext } from 'react'
import Meal from './Meal/Meal'
import styles from './Meals.module.css'
import ThemeContext from '../../context/ThemeContext'

import { RecipeContext } from '../../context/RecipeContext'
import BtnTop from '../UI/LoadingBar/BtnTop/BtnTop'

function Meals(props) {
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext)
	const { state, searchTerm } = useContext(RecipeContext)
	const filteredData = state.meals.filter(el => {
		if (searchTerm === '') {
			return (
				<li key={el.id}>
					<Meal {...el} state={props.state} theme={props.theme} />
				</li>
			)
		} else {
			return el.title.toLowerCase().includes(searchTerm)
		}
	})
	return (
		<div className={styles.wrapper}>
			<div className={styles.containerMeals}>
				<h3
					className={styles.text}
					style={{ color: isDarkMode ? themeDark.colors.textColor : themeLight.colors.textColor }}>
					Przepisy:
				</h3>

				{filteredData.map(meal => (
					<li key={meal.id}>
						<Meal {...meal} state={props.state} theme={props.theme} />
					</li>
				))}

				<BtnTop />
			</div>
		</div>
	)
}

export default Meals
