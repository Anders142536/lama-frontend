export type Subject = {
	id: number
	label: string
	topics: Topic[]
}

export type Topic = {
	id: number
	label: string
}

export type Question = {
	id: number
	label: string
	examMode: boolean
	answers: Answer[]
}

export type QuestionSummary = {
	id: number
	label: string
}

export type Answer = {
	id: number
	label: string
	correct: boolean
}
