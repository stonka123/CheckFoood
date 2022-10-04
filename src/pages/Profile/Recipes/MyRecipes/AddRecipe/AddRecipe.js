import LoadingBar from '../../../../../components/UI/LoadingBar/LoadingBar'
import { useState, useRef } from 'react'
import axios from '../../../../../axios'
import { useNavigate } from 'react-router-dom'

function AddRecipe(props) {
	const history = useNavigate()
	const imageRef = useRef()
	const [form, setForm] = useState({
		name: '',
		composition: '',
		difficulty: 'Easy',
		image: null,
	})
	const [loading, setLoading] = useState(false)
	const submit = async e => {
		e.preventDefault()

		try {
			await axios.post('/meals.json', {
				name: form.name,
				composition: form.composition,
				difficulty: form.difficulty,
			})
			history('/profil/ulubione')
		} catch (ex) {
			console.log(ex.response)
		}
	}

	return (
		<div className='card'>
			<div className='card-header'>Nowy Przepis</div>
			<div className='card-body'>
				<form onSubmit={submit}>
					<div className='form-group'>
						<label>Nazwa</label>
						<input
							required
							value={form.name}
							onChange={e => setForm({ ...form, name: e.target.value })}
							type='text'
							className='form-control'
						/>
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
							<option value='1'>Easy</option>
							<option value='2'>Medium</option>
							<option value='3'>Hard</option>
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
						<button className='btn btn-success'>Dodaj przepis!</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddRecipe
