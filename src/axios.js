import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://checkmeals-default-rtdb.firebaseio.com',
})

export default instance
