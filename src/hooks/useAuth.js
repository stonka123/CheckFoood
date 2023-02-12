import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

export default function useAuth() {
	const authContext = useContext(AuthContext)
	const auth = authContext.user

	const setAuth = user => {
		if (user) {
			authContext.login(user)
		} else {
			authContext.logout()
		}
	}
	return [auth, setAuth]
}
