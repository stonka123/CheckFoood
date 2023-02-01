import React, { useContext, useState } from 'react'
import styles from './Menu.module.css'
import AuthContext from '../../context/authContext'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Menu() {
	const [loading, setLoading] = useState(false)

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
		backgroundColor: '#fff',
		color: '#2b2b2b',
		borderRadius: '10px',
		fontWeight: 'bold',
	}

	return (
		<div className={styles.container}>
			<ul>
				<li className={styles.containerMenu}>
					<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to='/' end>
						Strona główna
					</NavLink>
					<div className={styles['profile-box']}>
						{auth.isAuthenticated ? (
							<>
								<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to='/profil'>
									Profil
								</NavLink>
								<NavLink onClick={logout} to='/wylogowano'>
									Wyloguj
								</NavLink>
							</>
						) : (
							<>
								{/* <Link onClick={login}>Zaloguj</Link> */}
								<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to='/zaloguj'>
									Zaloguj
								</NavLink>
								<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to='/rejestracja'>
									Zarejestruj
								</NavLink>
							</>
						)}
					</div>
				</li>
			</ul>
		</div>
	)
}

export default Menu
