import React, { useState, useContext } from 'react'
import styles from './Meal.module.css'

import { Link } from 'react-router-dom'
import { AiFillStar, AiFillFire, AiOutlineFieldTime } from 'react-icons/ai'
import { BiShow } from 'react-icons/bi'
import { FiBarChart } from 'react-icons/fi'
function Meal(props) {
	const checkDifficultySkill = () => {
		if (props.difficulty === 'Łatwy') {
			return (
				<div className={styles.difficulty}>
					{props.difficulty}
					<FiBarChart className={styles.diffIcon} />
				</div>
			)
		} else if (props.difficulty === 'Średni') {
			return (
				<div className={styles.diffMed}>
					{props.difficulty}
					<FiBarChart className={styles.diffIcon} />
				</div>
			)
		} else if (props.difficulty === 'Trudny') {
			return (
				<div className={styles.diffHard}>
					{props.difficulty}
					<FiBarChart className={styles.diffIcon} />
				</div>
			)
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
				<div className={styles.bottom}>
					<Link to={`/przepisy/${props.id}`} className={styles.btnShow}>
						<div className={styles.showBox}>
							<BiShow className={styles.icon} />
							Pokaż
						</div>
					</Link>
				</div>
				{checkDifficultySkill()}
			</div>
		</div>
	)
}

export default Meal
