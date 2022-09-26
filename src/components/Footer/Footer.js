import styles from './Footer.module.css'
import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'

function Footer(props) {
	const theme = useContext(ThemeContext)
	return (
		<ThemeContext.Consumer>
			{value => (
				<div className={theme === 'light' ? ` bgc-dark icon-dark` : `${styles.footer}`}>
					<div className={styles.footerText}>
						<span>check</span>
						<p>FOOD</p>
						{new Date().getFullYear()}
					</div>
				</div>
			)}
		</ThemeContext.Consumer>
	)
}

export default Footer
