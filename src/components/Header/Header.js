import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Searchbar from './Searchbar/Searchbar'
import ThemeContext from '../../context/ThemeContext'
import { MdDarkMode } from 'react-icons/md'

import { AiOutlineFileAdd } from 'react-icons/ai'
const Header = props => {
	const { themeLight, themeDark, isDarkMode } = useContext(ThemeContext)

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Link className={styles['add-recipe']} to='/profil/ulubione/dodaj'>
					<div className={`${styles.icon} $`}>
						<AiOutlineFileAdd />
					</div>
				</Link>
				<p
					className={styles.text}
					style={{ color: isDarkMode ? themeDark.colors.textColor : themeLight.colors.textColor }}>
					<span>check</span>food
				</p>
				<div className={styles.icon} onClick={props.changeTheme}>
					<MdDarkMode style={{ color: isDarkMode ? 'var(--grayColor)' : null }} />
				</div>
			</div>
			<p
				className={styles.subtitle}
				style={{ color: isDarkMode ? themeDark.colors.textColor : themeLight.colors.textColor }}>
				Przepisy na każdą okazję
			</p>
			<Searchbar onSearch={props.onSearch} />
		</div>
	)
}

export default Header
