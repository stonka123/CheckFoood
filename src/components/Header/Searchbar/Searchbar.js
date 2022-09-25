import styles from './Searchbar.module.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Searchbar(props) {
	const [term, setTerm] = useState('')

	const search = () => {
		props.onSearch(term)
	}

	const updateTerm = e => {
		setTerm(e.target.value)
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
			/>
			<button onClick={search} className={`btn btn-outline-dark ${styles.button}`}>
				{' '}
				Szukaj
			</button>
		</div>
	)
}

// Searchbar.PropTypes = {
// 	onSearch: PropTypes.func.isRequired,
// }

export default Searchbar
