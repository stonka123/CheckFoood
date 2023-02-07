import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useMatch } from 'react-router-dom'
import styles from './Profile.module.css'
import MyRecipes from './Recipes/MyRecipes/MyRecipes'
import ThemeContext from '../../context/ThemeContext'
function Profile(props) {
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext)
	return (
		<div>
			<div style={{ color: isDarkMode ? themeDark.colors.textColor : themeLight.colors.textColor }}>
				<div className='card-header'>
					<h2>Moje przepisy!</h2>
				</div>

				<div className='card-body'>
					<ul className='nav nav-tabs'>
						<li className='nav-item'>
							<Link className='nav-link' to='/profil/ulubione'>
								Przepisy
							</Link>
						</li>
						<Outlet />
					</ul>
					<div className='pt-4'>
						<Routes>
							<Route path='/ulubione' element={<MyRecipes />} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
