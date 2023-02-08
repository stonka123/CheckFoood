import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MyRecipes.module.css'
function MyRecipes() {
	return (
		<div className='wrapper'>
			<p>Nie masz jeszcze żadnego przepisu</p>

			<Link to='/profil/ulubione/dodaj' className={styles.btnAdd}>
				Dodaj przepis
			</Link>
		</div>
	)
}

export default MyRecipes
