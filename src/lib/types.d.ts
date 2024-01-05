export type Subject = {
	id: number
	name: string
	topics: Topic[]
}

export type Topic = {
	id: number
	name: string
	fachId: number // remove once new api is there
}

export type Question = {
	id: number
	subjectId: number
	topicId: number
	name: string
	examMode: boolean
	answers: Answer[]
}

export type Answer = {
	id: number
	name: string
	correct: boolean
}
