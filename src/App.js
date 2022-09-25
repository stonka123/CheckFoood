import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Meals from './components/Meals/Meals'
import LoadingBar from './components/UI/LoadingBar/LoadingBar'
import { dataMeals } from './data/dataMeals'
function App() {
	const [state, setState] = useState({
		meals: [],
		loading: true,
	})

	useEffect(() => {
		setTimeout(() => {
			setState({ meals: [...dataMeals], loading: false })
			console.log('wyrenderowane')
		}, 1000)
	}, [])

	const searchHandler = term => {
		const meals = [...dataMeals].filter(x => x.title.toLowerCase().includes(term.toLowerCase()))
		setState({ meals })
	}

	return (
		<div className='App'>
			<Header onSearch={term => searchHandler(term)} />
			{state.loading ? <LoadingBar /> : <Meals meals={state.meals} />}
		</div>
	)
}

export default App
