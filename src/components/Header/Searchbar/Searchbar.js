import styles from './Searchbar.module.css'
import { useState, useContext, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../../../context/ThemeContext'
import { useNavigate } from 'react-router-dom'

function Searchbar(props) {
	const [term, setTerm] = useState('')
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext)
	const history = useNavigate()
	const search = () => {
		props.onSearch(term)
	}

	const inputRef = useRef(null)

	const focusInput = () => {
		inputRef.current.focus()
	}
	useEffect(() => {
		focusInput()
	}, [])

	return (
		<div className={styles.container}>
			<input
				ref={inputRef}
				value={term}
				onChange={e => {
					setTerm(e.target.value)
				}}
				className={styles.input}
				type='text'
				placeholder='Znajdź przepis...'
				onKeyDown={e => (e.key === 'Enter' ? search(term) : null)}
			/>
			<ThemeContext.Consumer>
				{value => (
					<button onClick={search} className={styles.button}>
						Szukaj
					</button>
				)}
			</ThemeContext.Consumer>
		</div>
	)
}

export default Searchbar
