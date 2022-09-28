import React from 'react'
import styles from './Menu.module.css'
function Menu() {
	return (
		<div className={styles.container}>
			<ul>
				<li>
					<a href='#'>Przepisy</a>
				</li>
				<li>
					<a href='#'>Zaloguj</a>
				</li>
			</ul>
			
		
		</div>
	)
}

export default Menu
