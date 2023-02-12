import React, { useContext, useState } from 'react'
import styles from './Menu.module.css'

import { Link, NavLink, Outlet } from 'react-router-dom'
import { CiLogin, CiLogout } from 'react-icons/ci'
import { CgProfile, CgHome } from 'react-icons/cg'
import useAuth from '../../hooks/useAuth'
function Menu() {
	const [loading, setLoading] = useState(false)
	const [auth, setAuth] = useAuth()

	const logout = e => {
		e.preventDefault()
		setAuth(false)
	
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
						<CgHome className={styles.icon} /> Strona główna
					</NavLink>
					<div className={styles['profile-box']}>
						{auth ? (
							<>
								<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to='/profil'>
									<CgProfile className={styles.icon} />
									Profil
								</NavLink>
								<NavLink onClick={logout} to='/wylogowano'>
									Wyloguj
									<CiLogout className={styles.icon} />
								</NavLink>
							</>
						) : (
							<>
								{/* <Link onClick={login}>Zaloguj</Link> */}
								<NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to='/zaloguj'>
									Zaloguj
									<CiLogin className={styles.icon} />
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
