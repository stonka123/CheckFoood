import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useMatch } from 'react-router-dom'
import styles from './Profile.module.css'
import MyRecipes from './Recipes/MyRecipes/MyRecipes'

function Profile(props) {
	return (
		<div className='wrapper'>
			<div className='container'>
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
