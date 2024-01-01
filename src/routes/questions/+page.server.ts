import { getSubjects } from "$lib/api";
import type { PageLoad } from "./$types";


export const load: PageLoad = async ({ params }) => {

	const subjects = await getSubjects()

	return {
		subjects: subjects
	}
}


