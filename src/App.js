import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Meals from './components/Meals/Meals'

function App() {
	const [state, setState] = useState({
		meals: [
			{
				id: 1,
				title: 'Łosoś po norwesku',
				rating: 4.2,
				calories: 150,
				time: '5:30',
				difficulty: 'Hard',
				img: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
			},
			{
				id: 2,
				title: 'Polędwica w szparagach',
				rating: 4.7,
				calories: 430,
				time: '3:30',
				difficulty: 'Medium',
				img: 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg',
			},
			{
				id: 3,
				title: 'Omlet z banem',
				rating: 4.1,
				calories: 280,
				time: '1:15',
				difficulty: 'Easy',
				img: 'https://cdn.pixabay.com/photo/2017/06/16/18/35/tarte-2409958_960_720.jpg',
			},
		],
	})
	const copyState = [
		{
			id: 1,
			title: 'Łosoś po norwesku',
			rating: 4.2,
			calories: 150,
			time: '5:30',
			difficulty: 'Hard',
			img: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
		},
		{
			id: 2,
			title: 'Polędwica w szparagach',
			rating: 4.7,
			calories: 430,
			time: '3:30',
			difficulty: 'Medium',
			img: 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg',
		},
		{
			id: 3,
			title: 'Omlet z banem',
			rating: 4.1,
			calories: 280,
			time: '1:15',
			difficulty: 'Easy',
			img: 'https://cdn.pixabay.com/photo/2017/06/16/18/35/tarte-2409958_960_720.jpg',
		},
	]

	const searchHandler = term => {
		console.log(state.meals)
		console.log(copyState)
		const meals = [...copyState].filter(x => x.title.toLowerCase().includes(term.toLowerCase()))
		setState({ meals })
		console.log('szukaj z app', term)
	}
	return (
		<div className='App '>
			<Header onSearch={term => searchHandler(term)} />
			<Meals meals={state.meals} />
		</div>
	)
}

export default App
