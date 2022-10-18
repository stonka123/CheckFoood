import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingBar from '../../components/UI/LoadingBar/LoadingBar'
import useWebsiteTitle from '../../context/useWebsiteTitle'
import { addRecipeContext } from '../../context/addRecipeContext'

export default function ShowMeal(props) {
	const title = useContext(addRecipeContext)
	const { id } = useParams()
	console.log(title)
	// console.log(id)
	const [meal, setMeal] = useState({})
	const [loading, setLoading] = useState(true)
	const setTitle = useWebsiteTitle()
	const fetchMeal = () => {
		setMeal({
			id: 1,
			title: 'Łosoś po norweskuu',
			rating: 4.2,
			calories: 150,
			time: '5:30',
			difficulty: 'Hard',
			img: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
		})

		setTitle('Łosoś po norwesku')
		setLoading(false)
	}

	useEffect(() => {
		setTimeout(() => {
			fetchMeal()
		}, 500)
	}, [])

	if (loading) return <LoadingBar />
	return <h1>Przepis na: {meal.title}</h1>
}
