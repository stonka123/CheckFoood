import { useContext, useState } from 'react'
import axios from 'axios'
import AuthContext from '../../../../context/authContext'
import { useNavigate } from 'react-router-dom'

function Register(props) {
	const navigate = useNavigate()
	const setAuth = useContext(AuthContext)
	const [form, setForm] = useState({
		email: '',
		password: '',
	})
	console.log(setAuth.isAuthenticated)
	const submit = async e => {
		e.preventDefault()
		console.log(form.password)
		try {
			const res = await axios.post(
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtyscHg5E2rywp1O7-AFbl7FZ-6RzVclI',
				{
					email: form.email,
					password: form.password,
					returnSecureToken: true,
				}
			)
			setAuth.login()
			navigate('/')
		} catch (ex) {
			console.log(ex.response)
		}
	}

	return (
		<div className='card'>
			<div className='card-header'>Rejestracja</div>
			<h3>Rejestracja</h3>
			<form onSubmit={submit}>
				<div className='form-group mt-2'>
					<label>Emaiil</label>
					<input
						type='email'
						value={form.email}
						onChange={e => setForm({ ...form, email: e.target.value })}
						className='form-control  mt-2'
					/>
				</div>
				<div className='form-group  mt-2'>
					<label>Hasło</label>
					<input
						type='password'
						value={form.password}
						onChange={e => setForm({ ...form, password: e.target.value })}
						className='form-control  mt-2'
					/>
				</div>
				<button className='btn btn-primary mt-4'>przesli</button>
			</form>
		</div>
	)
}

export default Register

// 11.6
