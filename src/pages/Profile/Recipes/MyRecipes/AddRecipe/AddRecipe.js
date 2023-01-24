import LoadingBar from '../../../../../components/UI/LoadingBar/LoadingBar'
import { useState, useRef, createElement, createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AddRecipe.module.css'
import { addRecipeContext } from '../../../../../context/addRecipeContext'
function AddRecipe(props) {
	const history = useNavigate()
	const imageRef = useRef()
	const [loading, setLoading] = useState(false)

	const data = useContext(addRecipeContext)

	const [form, setForm] = useState([
		...data,
		[{ id: 5, title: '', rating: '', calories: '', time: '', difficulty: '', img: null }],
	])

	const submit = e => {
		e.preventDefault()

		console.log(form)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.containerTitle}>
				<h4 className='card-header'>Nowy Przepis</h4>
				<div className='card-body'>
					<form>
						<div className='form-group'>
							<label>Nazwa</label>
							<input
								required
								value={form.title}
								onChange={e => setForm({ ...form, title: e.target.value })}
								type='text'
								className='form-control'
							/>
						</div>
						<div className='form-group'>
							<label>Kalorie</label>
							<textarea
								required
								onChange={e => setForm({ ...form, calories: e.target.value })}
								value={form.calories}
								className='form-control'
								rows='3'></textarea>
						</div>
						<div className='form-group'>
							<label>Czas</label>
							<textarea
								required
								onChange={e => setForm({ ...form, time: e.target.value })}
								value={form.time}
								className='form-control'
								rows='3'></textarea>
						</div>
						<div className='form-group'>
							<label>Skład</label>
							<textarea
								required
								onChange={e => setForm({ ...form, composition: e.target.value })}
								value={form.composition}
								className='form-control'
								rows='3'></textarea>
						</div>
						<div className='form-group'>
							<label>Poziom trudności</label>
							<select
								onChange={e => setForm({ ...form, difficulty: e.target.value })}
								value={form.difficulty}
								className='form-control'
								name=''
								id=''>
								<option value='Easy'>Easy</option>
								<option value='Medium'>Medium</option>
								<option value='Hard'>Hard</option>
							</select>
						</div>
						<div className='form-group'>
							<label>Zdjęcie</label>
							<input
								type='file'
								onChange={e => setForm({ ...form, image: e.target.files })}
								ref={imageRef}
								className='form-control'
							/>
						</div>

						<div className='text-end mt-3'>
							<button onClick={submit} className='btn btn-success'>
								Dodaj przepis!
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddRecipe
