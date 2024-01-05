import { getSubjects } from '$lib/api'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ params }) => {
	return {
		subjects: await getSubjects()
	}
}
