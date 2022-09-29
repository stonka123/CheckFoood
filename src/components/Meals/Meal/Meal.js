import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styles from './Meal.module.css'
import ThemeContext from '../../../context/ThemeContext'
import { Link } from 'react-router-dom'

function Meal(props) {
	const checkDifficultySkill = () => {
		if (props.difficulty === 'Easy') {
			return <div className={styles.difficulty}>{props.difficulty}</div>
		} else if (props.difficulty === 'Medium') {
			return <div className={styles.diffMed}>{props.difficulty}</div>
		} else if (props.difficulty === 'Hard') {
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
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							className='bi bi-star-fill'
							viewBox='0 0 16 16'>
							<path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
						</svg>{' '}
						<span>{props.rating}</span>
					</div>
					<div className={styles.kcal}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							className='bi bi-fire'
							viewBox='0 0 16 16'>
							<path d='M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z' />
						</svg>{' '}
						<span>{props.calories} Kcal</span>
					</div>
					<div className={styles.time}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							className='bi bi-clock-fill'
							viewBox='0 0 16 16'>
							<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z' />
						</svg>{' '}
						<span> {props.time}</span>
					</div>
				</div>
				<ThemeContext.Consumer>
					{value => (
						<div className={styles.bottom}>
							<Link to={`/przepisy/${props.id}`} className={`btn btn-secondary m-1 ${styles.btnShow} text-${value}`}>
								Pokaż
							</Link>
							{/* <a href='/meals/id' className={`btn btn-secondary m-1 ${styles.btnShow} text-${value}`}>
								Pokaż
							</a> */}
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
	id: PropTypes.number.isRequired,
	rating: PropTypes.number.isRequired,
	calories: PropTypes.number.isRequired,
}
export default Meal
