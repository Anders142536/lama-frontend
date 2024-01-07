import axios, { type AxiosResponse } from 'axios'
import type {
	Question,
	QuestionSummary,
	Subject,
	Topic
} from './frontend-types'
import type { BeQuestion, BeSubject, BeTopic } from './backend-types'

const ax = axios.create({
	baseURL: 'http://lama-learning.ddns.net:8080/api/'
})

export const getSubjects = async (): Promise<Subject[]> => {
	const resSub: AxiosResponse<BeSubject[], any> = await ax.get('fach')
	const resTopics: AxiosResponse<BeTopic[], any> = await ax.get('themengebiet')

	const subjects: Subject[] = []

	resSub.data.forEach((sub) => {
		subjects.push({
			id: sub.id,
			label: sub.name,
			topics: resTopics.data
				.filter((topic) => topic.fachId === sub.id)
				.map((topic) => {
					return {
						id: topic.id,
						label: topic.name
					}
				})
		})
	})

	return subjects
}

export const getQuestionSummariesOfTopic = async (
	topicId: number
): Promise<QuestionSummary[]> => {
	const questionResponse: AxiosResponse<BeQuestion[], any> = await ax.get(
		`frage/${topicId}`
	)

	return questionResponse.data.map((q) => {
		return {
			id: q.id,
			label: q.name
		}
	})
}
