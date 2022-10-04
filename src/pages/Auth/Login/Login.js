import React, { useRef, useState } from 'react'

function Login(props) {
	const emailRef = useRef()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const submit = e => {
		e.preventDefault()

		setTimeout(() => {
			// logowanie
		}, 500)
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
				<button className='btn btn-primary mt-4'>Zapisz</button>
			</form>
		</div>
	)
}

export default Login
