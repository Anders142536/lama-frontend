import axios, { type AxiosResponse } from 'axios'
import type { Subject, Topic } from './types'

const ax = axios.create({
	baseURL: 'http://lama-learning.ddns.net:8080/api/'
})

export const getSubjects = async (): Promise<Subject[]> => {
	const resSub: AxiosResponse<Subject[], any> = await ax.get('fach')
	const resTopics: AxiosResponse<Topic[], any> = await ax.get('themengebiet')
	const subjects: Subject[] = []

	resSub.data.forEach((sub) => {
		subjects.push({
			id: sub.id,
			name: sub.name,
			topics: resTopics.data.filter((topic) => topic.fachId === sub.id)
		})
	})

	return subjects
}
