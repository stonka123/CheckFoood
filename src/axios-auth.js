import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://identitytoolkit.googleapis.com/v1',
	params: {
		key: 'AIzaSyAlEclZDHlLsNSGmLtvKC44oykbV5k6jHg',
	},
})

export default instance
