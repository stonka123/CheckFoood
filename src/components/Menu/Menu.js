import React, { useContext } from 'react'
import styles from './Menu.module.css'
import AuthContext from '../../context/authContext'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Menu() {
	const auth = useContext(AuthContext)

	const login = e => {
		e.preventDefault()
		auth.login()
	}
	const logout = e => {
		e.preventDefault()
		auth.logout()
	}
	let activeStyle = {
		backgroundColor: 'white',
		color: 'var(--mainColor)',
	}
	let activeClassName = 'underline'
	return (
		<div className={styles.container}>
			<ul>
				<li>
					<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to='/' end>
						Strona główna
					</NavLink>
				</li>
				<li>
					{auth.isAuthenticated ? (
						<>
							<a onClick={logout} href='#'>
								Wyloguj
							</a>

							<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to='/profil'>
								Profil
							</NavLink>
						</>
					) : (
						<>
							<NavLink to='/rejestracja'>Zarejestruj</NavLink>
							<a onClick={login} href='#'>
								Zaloguj
							</a>
						</>
					)}
				</li>
			</ul>
		</div>
	)
}

export default Menu
