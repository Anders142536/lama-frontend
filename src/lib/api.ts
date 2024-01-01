import axios, { type AxiosResponse } from 'axios'

const ax = axios.create({
	baseURL: 'http://lama-learning.ddns.net:8080/api/'
})

export const getSubjects = async () => {
	const r: AxiosResponse = await ax.get('fach')

	if (r.status === 200) {
		console.log(r.data)
		return r.data
	}
}
