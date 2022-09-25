function LoadingBar() {
	return (
		<div className='d-flex justify-content-center mt-5'>
			<div className='spinner-border' role='status' style={{ color: 'var(--mainColor)' }}>
				<span className='sr-only'></span>
			</div>
		</div>
	)
}

export default LoadingBar
