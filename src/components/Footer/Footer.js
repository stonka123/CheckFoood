import styles from './Footer.module.css'

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footerText}>
				<span>check</span>
				<p>FOOD</p>
				{new Date().getFullYear()}
			</div>
		</div>
	)
}

export default Footer
