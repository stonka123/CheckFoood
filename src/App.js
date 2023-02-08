import React, { useContext, useEffect, useReducer, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Meals from './components/Meals/Meals'
import LoadingBar from './components/UI/LoadingBar/LoadingBar'
import ThemeContext from './context/ThemeContext'
import { themeLight, themeDark } from './context/Theme'
import AuthContext from './context/authContext'

// PAGES
import ShowMeal from './pages/ShowMeal/ShowMeal'
import NotFound from './pages/404/NotFound'
import Login from './pages/Auth/Login/Login'
import Profile from '../src/pages/Profile/Profile'
import useWebsiteTitle from './context/useWebsiteTitle'
import AddRecipe from './pages/Profile/Recipes/MyRecipes/AddRecipe/AddRecipe'
import { RecipeContext } from './context/RecipeContext'
import Register from './pages/Auth/Login/Register/Register'
import axios from 'axios'
import Settings from './pages/Profile/Settings/Settings'

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [isDarkMode, setIsDarkMode] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')
	const setTitle = useWebsiteTitle()
	setTitle('Strona główna')
	const [recipes, setRecipes] = useState([])

	const fetchRecipes = async () => {
		try {
			const res = await axios.get('https://checkfood-69493-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
			const newRecipes = []
			for (const key in res.data) {
				newRecipes.push({ ...res.data[key], id: key })
			}
			setRecipes(newRecipes)
			dispatch({ type: 'set-meals', meals: recipes })
			dispatch({ type: 'set-loading', loading: false })
		} catch (ex) {
			console.log(ex.response)
		}
	}

	useEffect(() => {
		fetchRecipes()
	}, [recipes])

	const changeTheme = () => {
		const body = document.getElementsByTagName('body')
		body[0].classList.toggle('body-dark')
		setIsDarkMode(!isDarkMode)
	}

	const handleAddRecipe = meals => {
		dispatch({ type: 'added-recipe', meals })
	}

	const reducer = (state, action) => {
		switch (action.type) {
			case 'set-meals':
				return { ...state, meals: action.meals }
			case 'set-loading':
				return { ...state, loading: action.loading }
			case 'added-recipe': {
				return { ...state, meals: [...state.meals, action.meals] }
			}

			default: {
				throw Error('Unknown action: ' + action.type)
			}
		}
	}

	const initialState = { namek: 'jasny', meals: recipes, loading: true }
	const [state, dispatch] = useReducer(reducer, initialState)

	const content = (
		<>
			<Routes>
				<Route path='/przepisy/:id' element={<ShowMeal state={state} />} />
				<Route path='profil/ulubione/dodaj' element={isAuthenticated ? <AddRecipe state={state} /> : <Login />} />
				<Route path='/profil/*' element={isAuthenticated ? <Profile /> : <Navigate to='/zaloguj' />} />
				<Route path='/rejestracja/*' element={<Register />} />
				<Route path='/zaloguj/*' element={<Login />} />
				<Route path='/' element={state.loading ? <LoadingBar /> : <Meals state={state} />} end />
				<Route path='/CheckFoood' element={state.loading ? <LoadingBar /> : <Meals state={state} />} end />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</>
	)

	return (
		<Router>
			<RecipeContext.Provider value={{ state, handleAddRecipe, searchTerm }}>
				<AuthContext.Provider
					value={{
						isAuthenticated: isAuthenticated,
						login: () => setIsAuthenticated(true),
						logout: () => setIsAuthenticated(false),
					}}>
					<ThemeContext.Provider value={{ themeLight, themeDark, isDarkMode }}>
						<div className='App'>
							<Header changeTheme={changeTheme} onSearch={term => setSearchTerm(term)} />
							<Menu />
							{content}
							<Footer />
						</div>
					</ThemeContext.Provider>
				</AuthContext.Provider>
			</RecipeContext.Provider>
		</Router>
	)
}

export default App
