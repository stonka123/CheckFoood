import React from 'react'
import { Outlet } from 'react-router-dom'

function ProfilDetails(props) {
	return (
		<form>
			<div className='form-group mt-2'>
				<label>Email</label>
				<input type='email' defaultValue='stonka123@gmail.com' className='form-control  mt-2' />
			</div>
			<div className='form-group  mt-2'>
				<label>Hasło</label>
				<input type='password' placeholder='****' className='form-control  mt-2' />
			</div>
			<button className='btn btn-primary mt-4'>Zapisz</button>
		</form>
	)
}

export default ProfilDetails
