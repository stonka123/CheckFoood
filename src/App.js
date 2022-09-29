import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Meals from './components/Meals/Meals'
import LoadingBar from './components/UI/LoadingBar/LoadingBar'
import ThemeContext from './context/ThemeContext'
import { dataMeals } from './data/dataMeals'
import { themeLight, themeDark } from './context/Theme'
import AuthContext from './context/authContext'
import Hotel from './pages/Hotel/Hotel'

function App() {
	const [meals, setMeals] = useState([])
	const [loading, setLoading] = useState(true)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [isDarkMode, setIsDarkMode] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setMeals(dataMeals)
			setLoading(false)
		}, 1000)
	}, [])

	const searchHandler = term => {
		const newMeals = [...dataMeals].filter(x => x.title.toLowerCase().includes(term.toLowerCase()))
		setMeals(newMeals)
	}

	const changeTheme = () => {
		const body = document.getElementsByTagName('body')
		body[0].classList.toggle('body-dark')
		setIsDarkMode(!isDarkMode)
	}
	const content = (
		<>
			<Routes>
				<Route path='/przepisy/:id' element={<Hotel />} />
				<Route path='/' element={loading ? <LoadingBar /> : <Meals meals={meals} />} />
			</Routes>
		</>
	)

	return (
		<Router>
			<AuthContext.Provider
				value={{
					isAuthenticated: isAuthenticated,
					login: () => setIsAuthenticated(true),
					logout: () => setIsAuthenticated(false),
				}}>
				<ThemeContext.Provider value={{ themeLight, themeDark, isDarkMode }}>
					<div className='App container'>
						<Header onSearch={term => searchHandler(term)} changeTheme={changeTheme} />
						<Menu />
						{content}

						<Footer />
					</div>
				</ThemeContext.Provider>
			</AuthContext.Provider>
		</Router>
	)
}

export default App
