import axios from 'axios'
import { token } from './redux/slices/authSlice'

const instance = axios.create({
	baseURL: 'http://localhost:5000/api'
})

instance.interceptors.request.use(
	function (config) {
		if (token) config.headers.Authorization = `Bearer ${token.value}`
		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

export default instance
