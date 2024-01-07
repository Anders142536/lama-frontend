import { getQuestionSummariesOfTopic } from '$lib/api'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	return {
		questionSummaries: await getQuestionSummariesOfTopic(
			parseInt(params.topicId)
		)
	}
}
