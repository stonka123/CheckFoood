import { useContext, useState } from 'react'
import axios from 'axios'
import AuthContext from '../../../../context/authContext'
import { useNavigate } from 'react-router-dom'
import styles from './Register.module.css'
import ThemeContext from '../../../../context/ThemeContext'
function Register(props) {
	const navigate = useNavigate()
	const setAuth = useContext(AuthContext)
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext)
	const [form, setForm] = useState({
		email: '',
		password: '',
		passwordCheck: '',
	})
	const [error, setError] = useState(false)
	const submit = async e => {
		e.preventDefault()
		if (form.password === form.passwordCheck) {
			try {
				const res = await axios.post(
					'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtyscHg5E2rywp1O7-AFbl7FZ-6RzVclI',
					{
						email: form.email,
						password: form.password,
						returnSecureToken: true,
					}
				)
				setAuth.login()
				navigate('/')
				setError(false)
			} catch (ex) {
				console.log(ex.response)
				setError(true)
			}
		} else {
			setError(true)
		}
	}

	return (
		<div className='wrapper'>
			<div
				className={styles.container}
				style={{ color: isDarkMode ? themeDark.colors.textColor : themeLight.colors.textColor }}>
				<div>
					<h3>Rejestracja</h3>
					<p>Zarejestruj się aby dostać możliwość dodawania i zapisywania swoich wymarzonych przepisów!</p>
					<form onSubmit={submit} className={styles.form}>
						<div className={styles.box}>
							<label className={styles.label}>E-mail</label>
							<input
								placeholder='Podaj email...'
								type='email'
								value={form.email}
								onChange={e => setForm({ ...form, email: e.target.value })}
								className={styles.input}
								required
							/>
						</div>
						<div className={styles.box}>
							<label className={styles.label}>Hasło</label>
							<input
								type='password'
								value={form.password1}
								onChange={e => setForm({ ...form, password: e.target.value })}
								className={styles.input}
								placeholder='Podaj hasło...'
								required
							/>
							<label className={styles.label}>Powtórz hasło</label>
							<input
								type='password'
								value={form.password2}
								onChange={e => setForm({ ...form, passwordCheck: e.target.value })}
								className={styles.input}
								placeholder='Powtórz hasło'
								required
							/>
						</div>
						{error ? (
							<p className={styles.error}>Popraw dane do rejestracji.</p>
						) : (
							<p className={styles.errorShow}>Popraw dane do rejestracji.</p>
						)}
						<button className={styles.btnSend}>Zarejestruj</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register

// 11.6
