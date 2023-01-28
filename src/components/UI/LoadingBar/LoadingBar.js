import ClipLoader from 'react-spinners/ClipLoader'

const override = {
	display: 'block',
	margin: '1em auto',
}
function LoadingBar() {
	return <ClipLoader cssOverride={override} color='#85bd3a' size={35} speedMultiplier={0.5} />
}

export default LoadingBar
