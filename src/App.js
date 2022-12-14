import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom'
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
// PAGES
import Hotel from './pages/Hotel/Hotel'
import Search from './pages/Search/Search'
import NotFound from './pages/404/NotFound'
import Login from './pages/Auth/Login/Login'
import Profile from '../src/pages/Profile/Profile'
import useWebsiteTitle from './context/useWebsiteTitle'
import AddRecipe from './pages/Profile/Recipes/MyRecipes/AddRecipe/AddRecipe'
import Register from './pages/Auth/Login/Register/Register'

function App() {
	const [meals, setMeals] = useState([])
	const [loading, setLoading] = useState(true)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [isDarkMode, setIsDarkMode] = useState(false)

	const setTitle = useWebsiteTitle()
	setTitle('Strona głóna')

	useEffect(() => {
		setTimeout(() => {
			setMeals(dataMeals)
			setLoading(false)
		}, 1000)
	}, [])

	// const searchHandler = term => {
	// 	const newMeals = [...dataMeals].filter(x => x.title.toLowerCase().includes(term.toLowerCase()))
	// 	setMeals(newMeals)
	// }

	const changeTheme = () => {
		const body = document.getElementsByTagName('body')
		body[0].classList.toggle('body-dark')
		setIsDarkMode(!isDarkMode)
	}
	const content = (
		<>
			<Routes>
				<Route path='/przepisy/:id' element={<Hotel />} />
				<Route path='profil/ulubione/dodaj' element={<AddRecipe />} />
				<Route path='/wyszukaj/:term' element={<Search />} />
				<Route path='/wyszukaj/' element={<Search />} />
				<Route path='/profil/*' element={isAuthenticated ? <Profile /> : <Navigate to='/zaloguj' />} />
				<Route path='/zaloguj/*' element={<Login />} />
				<Route path='/rejestracja/*' element={<Register />} />
				<Route path='/' element={loading ? <LoadingBar /> : <Meals meals={meals} />} end />
				<Route path='*' element={<NotFound />} />
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
						<Header changeTheme={changeTheme} />
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

// 9.13 poprawic useWebsite title
