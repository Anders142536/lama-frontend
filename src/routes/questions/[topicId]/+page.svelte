<script lang="ts">
	import type { PageServerData } from './$types'

	export let data: PageServerData
</script>

<dl class="list-dl">
	{#each data.questionSummaries as sum (sum.id)}
		<div>
			<span />
			<span>
				<dt class="font-bold">{sum.label}</dt>
				<dd>Unused description</dd>
			</span>
		</div>
	{:else}
		No questions defined
	{/each}
</dl>
