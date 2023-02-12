import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import LoadingBar from '../../components/UI/LoadingBar/LoadingBar'
import useWebsiteTitle from '../../context/useWebsiteTitle'
import ThemeContext from '../../context/ThemeContext'
import styles from './ShowMeal.module.css'
import { AiOutlineArrowLeft, AiFillEdit } from 'react-icons/ai'
import useAuth from '../../hooks/useAuth'

export default function ShowMeal(props) {
	const navigate = useNavigate()
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext)
	const { id } = useParams()
	const setTitle = useWebsiteTitle()
	const [loading, setLoading] = useState(true)
	const [meal, setMeal] = useState({})
	const [auth, setAuth] = useAuth()
	const [showEdit, setShowEdit] = useState(false)

	const findRecipe = () => {
		setMeal(props.state.meals.find(product => String(product.id) === id))
		setTitle(`Przepis -- ${meal.title} --`)
		setLoading(false)
	}
	useEffect(() => {
		if (auth != null) {
			if (auth.userId == meal.user_id) {
				setShowEdit(true)
			}
		}
	}, [meal])

	useEffect(() => {
		findRecipe()
	}, [])

	if (loading) return <LoadingBar />
	return (
		<div className={styles.wrapper}>
			<div
				className={styles.containerTitle}
				style={{ color: isDarkMode ? themeDark.colors.textColor : themeLight.colors.textColor }}>
				<div className={styles.boxBtn}>
					<button
						className={styles.backBtn}
						onClick={() => {
							navigate('/')
						}}>
						<AiOutlineArrowLeft className={styles.iconBtn} />
						Wróć
					</button>
					<div>
						{showEdit ? (
							<Link className={styles.editBtn} to={`/profil/ulubione/edytuj/${meal.id}`}>
								<AiFillEdit className={styles.iconBtn} />
								Edytuj
							</Link>
						) : null}
					</div>
				</div>
				<h3>{meal.title}</h3>
				<img src={meal.img} />
				<div className={styles.infoBox}>
					<div>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
							<path d='M544 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM416 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM320 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM160 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM64 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z' />
						</svg>
						<p className={meal.difficulty == 'Hard' ? styles.red : null}> {meal.difficulty} </p>
					</div>
					<div>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
							<path d='M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z' />
						</svg>

						<p> {meal.time}</p>
					</div>
				</div>
				<div className={styles.containerRecipe}>
					<h5> Składniki: </h5>
					<div>
						<p className={styles.count}>1</p>
						<p className={styles.kind}>Opakowanie</p>
						<p className={styles.item}>Kukurydza</p>
					</div>
					<div>
						<p className={styles.count}>2</p>
						<p className={styles.kind}>Łyżki</p>
						<p className={styles.item}>Mąka</p>
					</div>
					<div>
						<p className={styles.count}>240</p>
						<p className={styles.kind}>g</p>
						<p className={styles.item}>Cukier</p>
					</div>
				</div>
				<div className={styles.containerPrepatation}>
					<h5> Przygotowanie : </h5>
					<p>{meal.recipe}</p>
				</div>
			</div>
		</div>
	)
}
