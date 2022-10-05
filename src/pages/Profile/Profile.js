import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useMatch } from 'react-router-dom'

import MyRecipes from './Recipes/MyRecipes/MyRecipes'

function Profile(props) {
	return (
		<div className='card'>
			<div className='card-header'>
				<h2>Moje przepisy!</h2>
			</div>

			<div className='card-body'>
				<ul className='nav nav-tabs'>
					
					<li className='nav-item'>
						<NavLink className='nav-link' to='/profil/ulubione'>
							Przepisy
						</NavLink>
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
	)
}

export default Profile
