import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://checkfood-69493-default-rtdb.europe-west1.firebasedatabase.app',
})

export default instance
