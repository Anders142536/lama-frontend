<script lang="ts">
	import '../app.postcss'
	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
</script>

<!-- App Shell -->
<AppShell
	slotPageContent='max-w-screen-xl w-full p-2 self-center'>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar
			slotLead='flex gap-2'>
			<svelte:fragment slot="lead">
				<a href='/'>
					<strong class="text-xl mr-8 uppercase">Lama</strong>
				</a>
				<a href='/questions'>
					Questions
				</a>

			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/Anders142536/lama-frontend"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
		<slot />
</AppShell>
