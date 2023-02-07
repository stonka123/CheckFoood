import LoadingBar from '../../../../../components/UI/LoadingBar/LoadingBar'
import { useState, useRef, createElement, createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AddRecipe.module.css'
import { RecipeContext, RecipeDispatchContext } from '../../../../../context/RecipeContext'
import axios from 'axios'
import ThemeContext from '../../../../../context/ThemeContext'
function AddRecipe(props) {
	const navigate = useNavigate()
	const imageRef = useRef()
	const [loading, setLoading] = useState(false)
	const { handleAddRecipe } = useContext(RecipeContext)
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext)

	const [form, setForm] = useState({
		id: 4,
		title: '',
		rating: 5,
		calories: '',
		time: '',
		difficulty: 'Łatwy',
		img: 'https://cdn.pixabay.com/photo/2016/08/07/15/34/do-not-take-photos-1576438_960_720.png',
	})

	const submit = async e => {
		e.preventDefault()
		try {
			await axios.post('https://checkfood-69493-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', {
				title: form.title,
				time: form.time,
				calories: form.calories,
				difficulty: form.difficulty,
				img: form.img,
				rating: 5,
				recipe: form.composition,
			})
		} catch (ex) {
			console.log(ex.response)
		}

		navigate('/')
	}

	return (
		<div className={styles.wrapper}>
			<div
				className={styles.containerTitle}
				style={{ color: isDarkMode ? themeDark.colors.textColor : themeLight.colors.textColor }}>
				<h3>Nowy Przepis</h3>
				<form onSubmit={submit}>
					<div className={styles.box}>
						<label className={styles.label}>Nazwa potrawy</label>
						<input
							className={styles.input}
							required
							value={form.title}
							onChange={e => setForm({ ...form, title: e.target.value })}
							type='text'
						/>
					</div>
					<div className={styles.boxSmall}>
						<div className={styles['box-kcal']}>
							<label className={styles['label-kcal']}>Kalorie</label>
							<input
								required
								value={form.calories}
								onChange={e => setForm({ ...form, calories: e.target.value })}
								type='number'
								min='0'
								max='10000'
								className={styles.kcal}
							/>
						</div>
						<div className={styles['box-time']}>
							<label className={styles['label-time']}>Czas</label>
							<input
								required
								value={form.time}
								onChange={e => setForm({ ...form, time: e.target.value })}
								type='time'
								className={styles.time}
							/>
						</div>
					</div>
					<div className={styles.box}>
						<label className={styles.label}>Skład</label>
						<textarea
							required
							onChange={e => setForm({ ...form, composition: e.target.value })}
							value={form.composition}
							rows='5'></textarea>
					</div>
					<div className={styles.box}>
						<label className={styles.label}>Poziom trudności</label>
						<select
							onChange={e => setForm({ ...form, difficulty: e.target.value })}
							value={form.difficulty}
							name=''
							id=''>
							<option value='Łatwy'>Łatwy</option>
							<option value='Średni'>Średni</option>
							<option value='Trudny'>Trudny</option>
						</select>
					</div>
					<div className={styles.box}>
						<label className={styles.label}>Zdjęcie</label>
						<input
							src={e => setForm({ ...form, img: e.target.value })}
							type='text'
							onChange={e => setForm({ ...form, img: e.target.value })}
							ref={imageRef}
							placeholder='Link do zdjęcia...'
						/>
					</div>

					<div>
						<button>Dodaj przepis!</button>
					</div>
				</form>
			</div>
		</div>
	)
}
let nextId = 4
export default AddRecipe
