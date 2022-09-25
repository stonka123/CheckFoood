import React from 'react'
import PropTypes from 'prop-types'
import Meal from '../Meal/Meal'
import styles from './Meals.module.css'

function Meals(props) {
	return (
		<div className={`container ${styles.container}`}>
			<p className={styles.text}>Przepisy:</p>
			{props.meals.map(meal => (
				<Meal key={meal.id} {...meal} />
			))}
		</div>
	)
}
Meals.propTypes = {
	meals: PropTypes.array.isRequired,
}

export default Meals
