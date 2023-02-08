import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useMatch } from 'react-router-dom'
import styles from './Profile.module.css'
import MyRecipes from './Recipes/MyRecipes/MyRecipes'
import ThemeContext from '../../context/ThemeContext'
import Settings from './Settings/Settings'
function Profile(props) {
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext)

	let activeStyle = {
		backgroundColor: '#fff',
		color: '#2b2b2b',
		fontWeight: 'bold',
	}
	return (
		<div className={styles.wrapper}>
			<div
				className={styles.container}
				style={{ color: isDarkMode ? themeDark.colors.textColor : themeLight.colors.textColor }}>
				<h3>Mój profil</h3>
				<div className={styles.menu}>
					<ul>
						<li>
							<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to='/profil/ulubione'>
								Przepisy
							</NavLink>
							<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to='/profil/ustawienia'>
								Ustawienia
							</NavLink>
						</li>
					</ul>
				</div>
				<div>
					<Routes>
						<Route path='/ulubione' element={<MyRecipes />} />
						<Route path='/ustawienia' element={<Settings />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default Profile
