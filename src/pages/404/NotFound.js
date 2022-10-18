import React from 'react'
import styles from './NotFound.module.css'

function NotFound(props) {
	return (
		<div className={styles.container}>
			<p>404</p>
			<p>Nie znaleziono takiej strony.</p>
		</div>
	)
}

export default NotFound
