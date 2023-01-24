import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import LoadingBar from '../../components/UI/LoadingBar/LoadingBar'
import useWebsiteTitle from '../../context/useWebsiteTitle'
import { addRecipeContext } from '../../context/addRecipeContext'
import styles from './ShowMeal.module.css'

export default function ShowMeal(props) {
	const data = useContext(addRecipeContext)
	const { id } = useParams()
	const setTitle = useWebsiteTitle()
	const [loading, setLoading] = useState(true)

	const [meal, setMeal] = useState({})

	const findRecipe = () => {
		setMeal(data.find(product => String(product.id) === id))
		setLoading(false)
		setTitle('test')
	}
	console.log(meal)

	useEffect(() => {
		findRecipe()
	}, [id])

	if (loading) return <LoadingBar />
	return (
		<div className={styles.wrapper}>
			<div className={styles.containerTitle}>
				<Link className={styles.buttonBack} to='/'>
					Wróć
				</Link>
				<h3 className={styles.titleMeal}>{meal.title}</h3>
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
					<p>
						Wszystkie składniki na sos dokładnie mieszamy ze sobą. Kaszę gotujemy zgodnie z zaleceniami producenta na
						opakowaniu. Paprykę, kapary i suszone pomidory kroimy w drobną kostkę. Kukurydzę odsączamy z zalewy za
						pomocą sitka. Kolendrę siekamy. Wszystkie składniki mieszamy ze sobą, dodajemy nasz sos. Sałatkę układamy za
						pomocą kuchennego ringa.
					</p>
				</div>
			</div>
		</div>
	)
}
