import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import LoadingBar from '../../components/UI/LoadingBar/LoadingBar'
import useWebsiteTitle from '../../context/useWebsiteTitle'
import { addRecipeContext } from '../../context/addRecipeContext'

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
		<div>
			<Link to='/'> Wróć</Link>
			<img src={meal.img} />
			<p>Numer przepisu id to : {meal.id}</p>
			<p>Ocena przepisu to: {meal.rating}</p>
			<h1>Przepis na: {meal.title}</h1>
		</div>
	)
}
