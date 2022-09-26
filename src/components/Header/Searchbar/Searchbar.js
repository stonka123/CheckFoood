import styles from './Searchbar.module.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../../../context/themeContext'

function Searchbar(props) {
	const [term, setTerm] = useState('')

	const search = () => {
		props.onSearch(term)
	}

	return (
		<div className={`input-group-sm ${styles.container}`}>
			<input
				value={term}
				onChange={e => {
					setTerm(e.target.value)
				}}
				className={`form-control ${styles.input}`}
				type='text'
				placeholder='Znajdź przepis...'
				onKeyDown={e => (e.key === 'Enter' ? search(term) : null)}
			/>
			<ThemeContext.Consumer>
				{value => (
					<button onClick={search} className={`btn btn-outline-dark ${styles.button}`}>
						Szukaj
					</button>
				)}
			</ThemeContext.Consumer>
		</div>
	)
}

export default Searchbar
