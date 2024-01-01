<script lang="ts">
	import type { PageData } from './$types'
	import Card from '$lib/components/Card.svelte'
	import Subjects from './Subjects.svelte'
	import { invalidateAll } from '$app/navigation'

	export let data: PageData

	const loadSubjects = () => {
		invalidateAll()
		console.log(JSON.stringify(data))
	}
</script>

<div class="flex flex-row gap-2 h-full">
	<Card>
		<button
			class="btn variant-filled-primary"
			on:click={loadSubjects}>Load Subjects</button
		>
		<Subjects />
	</Card>
	<Card>Questions</Card>
</div>
