import { http } from './config'

export default {
	index:() => {
		return http.get('photos')
	},
	store:(photo) => {
		return http.post('photos', photo)
	}
}
