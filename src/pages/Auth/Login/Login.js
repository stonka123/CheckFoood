import React, { useRef, useState, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../../../context/authContext'
import { useNavigate } from 'react-router-dom'
function Login(props) {
	const setAuth = useContext(AuthContext)
	const navigate = useNavigate()
	const emailRef = useRef()
	const [loading, setLoading] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const submit = async e => {
		e.preventDefault()
		setLoading(true)
		try {
			const res = await axios.post(
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtyscHg5E2rywp1O7-AFbl7FZ-6RzVclI',
				{
					email,
					password,
					returnSecureToken: true,
				}
			)
			console.log(res)
			setAuth.login()
			navigate('/')
		} catch (ex) {
			setError(ex.response.data.error.message)
			console.log(ex.response)
		}
	}
	return (
		<div>
			<h3>Logowanie</h3>
			<form onSubmit={submit}>
				<div className='form-group mt-2'>
					<label>Email</label>
					<input
						type='email'
						valueDefault={email}
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
						valueDefault={password}
						onChange={e => setPassword(e.target.value)}
						className='form-control  mt-2'
					/>
				</div>
				{error ? (
					<div>
						<p>{error}</p>
					</div>
				) : null}
				<button className='btn btn-primary mt-4' onClick={submit}>
					Zapisz
				</button>
			</form>
		</div>
	)
}

export default Login
