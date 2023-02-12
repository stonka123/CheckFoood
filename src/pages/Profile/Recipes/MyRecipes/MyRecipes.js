import React, { useEffect, useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import styles from './MyRecipes.module.css'
import axios from 'axios'
import LoadingBar from '../../../../components/UI/LoadingBar/LoadingBar'
import { objectToArrayWithId } from '../../../../helpers/objects'
import { AiFillEdit, AiFillDelete, AiOutlinePlus } from 'react-icons/ai'
import useAuth from '../../../../hooks/useAuth'
function MyRecipes() {
	const [recipes, setRecipe] = useState([])
	const [loading, setLoading] = useState(true)
	const [auth] = useAuth()
	const [countRecipes, setCountRecipes] = useState()
	const fetchMyHotels = async () => {
		try {
			const res = await axios.get('https://checkfood-69493-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
			const newRecipe = objectToArrayWithId(res.data).filter(recipe => recipe.user_id === auth.userId)
			setRecipe(newRecipe)
			setLoading(false)
			setCountRecipes(newRecipe)

			newRecipe.forEach((item, myItemNumber) => {
				item.myItemNumber = myItemNumber + 1
			})
		} catch (ex) {
			console.log(ex.response)
		}
	}
	const removeRecipe = async id => {
		try {
			await axios.delete(`https://checkfood-69493-default-rtdb.europe-west1.firebasedatabase.app/recipes/${id}.json`)
			setRecipe(recipes.filter(x => x.id !== id))
		} catch (ex) {
			console.log(ex.response)
		}
	}

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
			fetchMyHotels()
		}, 300)
	}, [])
	return (
		<div className='wrapper'>
			{loading ? (
				<LoadingBar />
			) : (
				<div>
					<h5 className={styles.headerText}>Twoje dodane przepisy:</h5>

					{recipes.length > 0 ? (
						<table>
							<thead>
								<tr>
									<th>Lp.</th>
									<th>Nazwa</th>
									<th>Opcje</th>
								</tr>
							</thead>
							<tbody>
								{recipes.map(recipe => (
									<tr key={recipe.id}>
										<td>{recipe.myItemNumber}</td>
										<td>{recipe.title}</td>
										<td className={styles.box}>
											<Link className={styles.edit} to={`/profil/ulubione/edytuj/${recipe.id}`}>
												<AiFillEdit className={styles.icon} />
												Edytuj
											</Link>
											<button className={styles.delete} onClick={() => removeRecipe(recipe.id)}>
												<AiFillDelete className={styles.icon} />
												Usun
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<p className={styles.infoText}>Nie masz jeszcze żadnego przepisu</p>
					)}
				</div>
			)}

			<Link to='/profil/ulubione/dodaj' className={styles.btnAdd}>
				<AiOutlinePlus className={styles.icon} />
				Dodaj przepis
			</Link>
		</div>
	)
}

export default MyRecipes
