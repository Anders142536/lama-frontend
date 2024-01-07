<script lang="ts">
	import Card from '$lib/components/Card.svelte'
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton'
	import type { LayoutData } from './$types'
	import { goto } from '$app/navigation'

	export let data: LayoutData

	const handleClick = (topicId: number) => {
		goto(`/questions/${topicId}`)
	}
</script>

<div class="flex flex-row gap-2 h-full">
	<div class="flex-1">
		<Card>
			<TreeView>
				{#each data.subjects as subject (subject.id)}
					<TreeViewItem>
						<div class="flex w-full">
							{subject.label}
						</div>
						<svelte:fragment slot="children">
							{#each subject.topics as topic (topic.id)}
								<TreeViewItem on:click={() => handleClick(topic.id)}>
									<div class="flex w-full">
										{topic.label}
									</div>
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
	</div>
	<div class="flex-[3]">
		<Card><slot /></Card>
	</div>
</div>
