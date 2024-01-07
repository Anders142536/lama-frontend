export type BeSubject = {
	id: number
	name: string
}

export type BeTopic = {
	id: number
	name: string
	fachId: number
}

export type BeQuestion = {
	id: number
	name: string
	faecherId: number
	themengebietId: number
	examMode: boolean
}
