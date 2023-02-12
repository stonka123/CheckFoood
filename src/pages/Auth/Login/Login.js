import React, { useRef, useState, useContext } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import ThemeContext from '../../../context/ThemeContext'
import useAuth from '../../../hooks/useAuth'
function Login(props) {
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext)
	const [auth, setAuth] = useAuth()
	const navigate = useNavigate()
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
			setAuth({
				email: res.data.email,
				token: res.data.idToken,
				userId: res.data.localId,
			})

			// 11.9 zaczac
			navigate('/')
		} catch (ex) {
			setError(ex.response.data.error.message)
			console.log(error)
		}
	}

	return (
		<div className='wrapper'>
			<div
				className={styles.container}
				style={{ color: isDarkMode ? themeDark.colors.textColor : themeLight.colors.textColor }}>
				<div>
					<h3>Logowanie</h3>
					<p>Zaloguj się do swojego profilu w CheckFood</p>
					<form onSubmit={submit} className={styles.form}>
						<div className={styles.box}>
							<label className={styles.label}>E-mail</label>
							<input
								type='email'
								value={email}
								onChange={e => {
									setEmail(e.target.value)
								}}
								className={styles.input}
								placeholder='Podaj e-mail'
							/>
						</div>
						<div className={styles.box}>
							<label className={styles.label}>Hasło</label>
							<input
								type='password'
								value={password}
								onChange={e => setPassword(e.target.value)}
								className={styles.input}
								placeholder='Wpisz hasło'
							/>
						</div>
						{error ? (
							<div>
								<p className={styles.error}>Błędne dane do logowania.</p>
							</div>
						) : (
							<div>
								<p className={styles.errorShow}>Błędne dane do logowania.</p>
							</div>
						)}
						<button className={styles.btnSend}>Zaloguj</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
