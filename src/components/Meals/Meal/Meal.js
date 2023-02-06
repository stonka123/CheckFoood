import PropTypes from 'prop-types'
import React, { useState, useContext } from 'react'
import styles from './Meal.module.css'
import ThemeContext from '../../../context/ThemeContext'
import { Link } from 'react-router-dom'
import { AiFillStar, AiFillFire, AiOutlineFieldTime } from 'react-icons/ai'
function Meal(props) {
	const checkDifficultySkill = () => {
		if (props.difficulty === 'Łatwy') {
			return <div className={styles.difficulty}>{props.difficulty}</div>
		} else if (props.difficulty === 'Średni') {
			return <div className={styles.diffMed}>{props.difficulty}</div>
		} else if (props.difficulty === 'Trudny') {
			return <div className={styles.diffHard}>{props.difficulty}</div>
		}
	}

	return (
		<div className={styles.card}>
			<div className={styles.bgc} style={{ backgroundImage: `url(${props.img})` }}></div>

			<div className={styles.content}>
				<p className={styles.title}>{props.title}</p>

				<div className={styles.options}>
					<div className={styles.ratings}>
						<AiFillStar className={styles.icon} />
						<span>{props.rating}</span>
					</div>
					<div className={styles.kcal}>
						<AiFillFire className={styles.icon} />
						<span>{props.calories} Kcal</span>
					</div>
					<div className={styles.time}>
						<AiOutlineFieldTime className={styles.icon} />
						<span> {props.time}</span>
					</div>
				</div>
				<ThemeContext.Consumer>
					{value => (
						<div className={styles.bottom}>
							<Link to={`/przepisy/${props.id}`} className={styles.btnShow}>
								Pokaż
							</Link>
						</div>
					)}
				</ThemeContext.Consumer>
				{checkDifficultySkill()}
			</div>
		</div>
	)
}
Meal.propTypes = {
	title: PropTypes.string.isRequired,
	difficulty: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	rating: PropTypes.number,
	calories: PropTypes.string.isRequired,
}
export default Meal
