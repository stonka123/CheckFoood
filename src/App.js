import React, { useContext, useEffect, useReducer, useState } from 'react'
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
import ShowMeal from './pages/ShowMeal/ShowMeal'
import Search from './pages/Search/Search'
import NotFound from './pages/404/NotFound'
import Login from './pages/Auth/Login/Login'
import Profile from '../src/pages/Profile/Profile'
import useWebsiteTitle from './context/useWebsiteTitle'
import AddRecipe from './pages/Profile/Recipes/MyRecipes/AddRecipe/AddRecipe'
import { RecipeContext, RecipeDispatchContext } from './context/RecipeContext'
import Register from './pages/Auth/Login/Register/Register'

function App() {
	const backednmeals = [
		{
			id: 0,
			title: 'Łosoś po norwesku',
			rating: 4.2,
			calories: 150,
			time: '5:30',
			difficulty: 'Hard',
			img: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
		},
		{
			id: 1,
			title: 'Polędwica w szparagach',
			rating: 4.7,
			calories: 430,
			time: '3:30',
			difficulty: 'Medium',
			img: 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg',
		},
		{
			id: 2,
			title: 'Omlet z bananem',
			rating: 4.1,
			calories: 280,
			time: '1:15',
			difficulty: 'Easy',
			img: 'https://cdn.pixabay.com/photo/2017/06/16/18/35/tarte-2409958_960_720.jpg',
		},
		{
			id: 3,
			title: 'Chleb po swojsku test skonczony',
			rating: 3.4,
			calories: 420,
			time: '2:25',
			difficulty: 'Medium',
			img: 'https://cdn.pixabay.com/photo/2018/10/14/18/29/meatloaf-3747129_960_720.jpg',
		},
	]

	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [isDarkMode, setIsDarkMode] = useState(false)

	const setTitle = useWebsiteTitle()
	setTitle('Strona główna')

	useEffect(() => {
		setTimeout(() => {
			dispatch({ type: 'set-loading', loading: false })
			dispatch({ type: 'set-meals', meals: backednmeals })
		}, 1000)
	}, [])

	const searchHandler = term => {
		const newMeals = [...backednmeals].filter(x => x.title.toLowerCase().includes(term.toLowerCase()))
		console.log(recipes)
		dispatch({ type: 'set-meals', meals: newMeals })
		console.log(newMeals)
	}

	const changeTheme = () => {
		const body = document.getElementsByTagName('body')
		body[0].classList.toggle('body-dark')
		setIsDarkMode(!isDarkMode)
		dispatch({ type: 'change-name' })
	}
	// reducer

	const reducer = (state, action) => {
		switch (action.type) {
			case 'change-name':
				return { ...state, namek: state.namek === 'jasny' ? 'ciemny' : 'jasny' }
			case 'set-meals':
				return { ...state, meals: action.meals }
			case 'set-loading':
				return { ...state, loading: action.loading }
		}

		return state
	}
	const recipesReducer = (recipes, action) => {
		switch (action.type) {
			case 'added-recipe': {
				return [
					...recipes,
					{
						id: action.id,
						title: action.title,
						time: action.time,
						calories: action.calories,
						img: action.img,
						difficulty: action.difficulty,
					},
				]
			}

			default: {
				throw Error('Unknown action: ' + action.type)
			}
		}
	}

	const initialRecipes = [...dataMeals]
	const initialState = { namek: 'jasny', meals: [], loading: true }

	const [state, dispatch] = useReducer(reducer, initialState)
	const [recipes, dispatche] = useReducer(recipesReducer, initialRecipes)

	const content = (
		<>
			<Routes>
				<Route path='/przepisy/:id' element={<ShowMeal state={state} />} />
				<Route
					path='profil/ulubione/dodaj'
					element={isAuthenticated ? <AddRecipe state={state} /> : <p>zaloguj sie!</p>}
				/>
				<Route path='/profil/*' element={isAuthenticated ? <Profile /> : <Navigate to='/zaloguj' />} />
				<Route path='/rejestracja/*' element={<Register />} />
				<Route path='/zaloguj/*' element={<Login />} />
				<Route path='/' element={state.loading ? <LoadingBar /> : <Meals state={state} />} end />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)

	return (
		<Router>
			<RecipeContext.Provider value={recipes}>
				<RecipeDispatchContext.Provider value={dispatche}>
					<AuthContext.Provider
						value={{
							isAuthenticated: isAuthenticated,
							login: () => setIsAuthenticated(true),
							logout: () => setIsAuthenticated(false),
						}}>
						<ThemeContext.Provider value={{ themeLight, themeDark, isDarkMode }}>
							<div className='App'>
								<Header changeTheme={changeTheme} onSearch={term => searchHandler(term)} />
								<Menu />
								{content}
								<Footer />
							</div>
						</ThemeContext.Provider>
					</AuthContext.Provider>
				</RecipeDispatchContext.Provider>
			</RecipeContext.Provider>
		</Router>
	)
}

export default App

// 9.13 poprawic useWebsite title
