<script lang="ts">
	import Card from '$lib/components/Card.svelte'
	import { invalidateAll } from '$app/navigation'
	import type { LayoutData } from '../$types'
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton'

	export let data: LayoutData
</script>

<div class="flex flex-row gap-2 h-full">
	<Card>
		<TreeView>
			{#each data.subjects as subject (subject.id)}
				<TreeViewItem>
					{subject.name}
					<svelte:fragment slot="children">
						{#each subject.topics as topic (topic.id)}
							<TreeViewItem>
								{topic.name}
							</TreeViewItem>
						{:else}
							<TreeViewItem>No topics defined</TreeViewItem>
						{/each}
					</svelte:fragment>
				</TreeViewItem>
			{:else}
				No subjects defined
			{/each}
		</TreeView>
	</Card>
	<Card><slot /></Card>
</div>
