import React, { useContext } from 'react'
import styles from './Menu.module.css'
import AuthContext from '../../context/authContext'
import { Link } from 'react-router-dom'

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
	return (
		<div className={styles.container}>
			<ul>
				<li>
					<Link to='/'>Przepisy</Link>
				</li>
				<li>
					{auth.isAuthenticated ? (
						<a onClick={logout} href='#'>
							Wyloguj
						</a>
					) : (
						<a onClick={login} href='#'>
							Zaloguj
						</a>
					)}
				</li>
			</ul>
		</div>
	)
}

export default Menu
