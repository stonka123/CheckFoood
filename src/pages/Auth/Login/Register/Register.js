import { useState } from 'react'
import axios from 'axios'
import AuthContext from '../../../../context/authContext'

function Register(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const submit = async e => {
		e.preventDefault()
		try {
			const res = await axios.post(
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAlEclZDHlLsNSGmLtvKC44oykbV5k6jHg',
				{
					email: email,
					password: password,
					returnSecureToken: true,
				}
			)
			console.log(res.data)
		} catch (ex) {
			console.log(ex.response)
		}
	}

	return (
		<div className='card'>
			<div className='card-header'>Rejestracja</div>
			<h3>Logowanie</h3>
			<form onSubmit={submit}>
				<div className='form-group mt-2'>
					<label>Email</label>
					<input
						type='email'
						value={email}
						onChange={e => {
							setEmail(e.target.value)
						}}
						className='form-control  mt-2'
					/>
				</div>
				<div className='form-group  mt-2'>
					<label>Hasło</label>
					<input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
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
