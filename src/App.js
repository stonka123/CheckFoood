import React, { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Meals from './components/Meals/Meals'
import LoadingBar from './components/UI/LoadingBar/LoadingBar'
import ThemeContext from './context/ThemeContext'
import { dataMeals } from './data/dataMeals'
import { themeLight, themeDark } from './context/Theme'

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

	const [isDarkMode, setIsDarkMode] = useState(false)

	const changeTheme = () => {
		const body = document.getElementsByTagName('body')
		body[0].classList.toggle('body-dark')
		setIsDarkMode(!isDarkMode)
	}
	return (
		<div className='App container'>
			<ThemeContext.Provider value={{ themeLight, themeDark, isDarkMode }}>
				<Header onSearch={term => searchHandler(term)} changeTheme={changeTheme} />
				<Menu />
				{state.loading ? <LoadingBar /> : <Meals meals={state.meals} />}
				<Footer />
			</ThemeContext.Provider>
		</div>
	)
}

export default App
