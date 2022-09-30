import React from 'react'
import { Outlet } from 'react-router-dom'

function MyRecipes() {
	return (
		<div>
			<p>Nie masz jeszcze żadnego przepisu</p>
			<button className='btn btn-primary'>Dodaj przepis</button>
		</div>
	)
}

export default MyRecipes
