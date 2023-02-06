import React, { useEffect, useState } from 'react'
import { BiArrowToTop } from 'react-icons/bi'
import styles from './BtnTop.module.css'

const BtnTop = () => {
	const [valueScroll, setValueScroll] = useState(20)
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		window.addEventListener('scroll', () => {
			let valueScroll = window.scrollY
			if (valueScroll > 100) {
				setVisible(true)
			} else {
				setVisible(false)
			}
		})
	}, [])
	const showBtn = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}
	return (
		<div>
			{visible ? (
				<div className={styles.btn} onClick={showBtn}>
					<BiArrowToTop />
				</div>
			) : null}
		</div>
	)
}

export default BtnTop
