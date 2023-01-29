import React from 'react'
import { Link } from 'react-router-dom'

function MyRecipes() {
	return (
		<div>
			<p>Nie masz jeszcze żadnego przepisu</p>

			<Link to='/profil/ulubione/dodaj' className='btn btn-primary'>
				Dodaj przepis
			</Link>
		</div>
	)
}

export default MyRecipes
