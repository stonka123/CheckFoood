import styles from './Footer.module.css'

import ThemeContext from '../../context/ThemeContext'
import { useContext } from 'react'

function Footer(props) {
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext)

	return (
		<div className={styles.footer}>
			<div className={styles.footerText}>
				<span>check </span>
				<p>FOOD © </p>
				{new Date().getFullYear()}
			</div>
		</div>
	)
}

export default Footer
