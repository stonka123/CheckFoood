import styles from './Footer.module.css'

import ThemeContext from '../../context/ThemeContext'
import { useContext } from 'react'

function Footer(props) {
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext)

	const year = new Date().getFullYear()

	return (
		<div
			className={styles.footer}
			style={{ color: isDarkMode ? themeDark.colors.textColor : themeLight.colors.textColor }}>
			<div className={styles.footerText}>
				<span>check </span>
				<p>FOOD ©{year}</p>
			</div>
		</div>
	)
}

export default Footer
