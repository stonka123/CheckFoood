import React from 'react'

function Login(props) {
	return (
		<div>
			<h3>Logowanie</h3>
			<form>
				<div className='form-group mt-2'>
					<label>Email</label>
					<input type='email' className='form-control  mt-2' />
				</div>
				<div className='form-group  mt-2'>
					<label>Hasło</label>
					<input type='password' className='form-control  mt-2' />
				</div>
				<button className='btn btn-primary mt-4'>Zapisz</button>
			</form>
		</div>
	)
}

export default Login
